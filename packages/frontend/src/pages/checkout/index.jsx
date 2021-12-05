import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import { useCheckout } from './context/checkoutContext';
import orderRequest from '../../api/orderAPI';

import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import Stepper from './components/Stepper';
import Shipping from './components/Shipping';
import Confirmation from './components/Confirmation';
import Summary from './components/Summary';
import Payment from './components/Payment';

const STEPS = [
  {
    id: 1,
    title: 'Shipping',
    status: 'IN_PROGRESS',
  },
  {
    id: 2,
    title: 'Payment',
    status: 'PENDING',
  },
  {
    id: 3,
    title: 'Confirmation',
    status: 'PENDING',
  },
];

const Checkout = () => {
  const { cart, auth } = useSelector(state => state);
  const [step, setStep] = useState(0);
  const [, setIsLoading] = useState(false);
  const [stepsState, setStepsState] = useState([...STEPS]);
  const [{ shippingInformation, paymentMethod }] = useCheckout();

  const navigate = useNavigate();

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Shipping userState={auth.user} />;
      case 1:
        return <Payment />;
      case 2:
        return <Confirmation cartState={cart} />;
      default:
        return 'Error';
    }
  };

  const handleNext = () => {
    setStepsState(prevState => {
      prevState[step].status = 'DONE';
      prevState[step + 1].status = 'IN_PROGRESS';

      return [...prevState];
    });
    setStep(prevStep => ++prevStep);
  };

  const handlePrevious = () => {
    setStepsState(prevState => {
      prevState[step].status = 'PENDING';
      prevState[step - 1].status = 'IN_PROGRESS';

      return [...prevState];
    });

    setStep(prevStep => --prevStep);
  };

  const disabledButton = () => {
    switch (step) {
      case 0: {
        return !!shippingInformation.id;
      }
      case 1: {
        return !shippingInformation.id || !!paymentMethod;
      }
      default:
        return false;
    }
  };

  const orderSubmitHandler = async () => {
    setIsLoading(true);
    const items = cart.cart.map(({ product, quantity }) => ({
      product: product._id,
      quantity: quantity,
      price: product.price,
    }));

    const data = {
      uid: auth.user._id,
      items: items,
      discount: cart.discount,
      totalPrice: cart.totalPrice,
      shippingFee: cart.shippingFee,
      subTotal: cart.subTotal,
      paymentMethod: paymentMethod,
      shippingInformation: shippingInformation.data,
      status: 'placed',
    };

    try {
      const response = await orderRequest.createOrder(data);
      window.location.href = `/order/success?id=${response.data.order}`;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='wrapper'>
      <Container size='sm'>
        <>
          <SectionDivider size='sm'>
            <div className='flex relative items-center justify-center'>
              <div
                className='absolute left-0 flex items-center text-blue-600 hover:border-b hover:border-blue-600 cursor-pointer'
                onClick={() => navigate('/cart')}
              >
                <ChevronDoubleLeftIcon className='w-5 mr-2' />
                Back to Cart
              </div>
              <h2 className='text-center text-4xl font-bold'>Checkout</h2>
            </div>
          </SectionDivider>
          <SectionDivider size='sm'>
            <Stepper steps={stepsState} />
          </SectionDivider>
          <SectionDivider size='sm'>
            <div className='flex items-start gap-10'>
              <div className='max-w-[70%] w-[70%]'>
                <div className='mb-10 h-[500px]'>{renderStep()}</div>
                <div className='flex justify-between items-center'>
                  {step === 0 ? null : (
                    <button
                      className='px-6 text-sm py-2 border border-gray-300 rounded-md font-semibold hover:text-blue-600 transition-all'
                      onClick={handlePrevious}
                    >
                      Back to {STEPS[step - 1].title}
                    </button>
                  )}
                  {step === 2 ? null : (
                    <button
                      className='px-6 text-sm py-2 border border-blue-600 bg-blue-600 rounded-md text-white font-semibold hover:text-blue-600 hover:bg-transparent transition-all ml-auto disabled:opacity-50 disabled:pointer-events-none'
                      onClick={handleNext}
                      disabled={!disabledButton()}
                    >
                      Move to {STEPS[step + 1].title}
                    </button>
                  )}
                </div>
              </div>
              <div className='max-w-[30%] w-[30%]'>
                <Summary cartState={cart} />
                {step === 2 ? (
                  <button
                    className='w-full bg-blue-600 py-2 font-semibold rounded-md text-white'
                    onClick={orderSubmitHandler}
                  >
                    Place Order and Pay
                  </button>
                ) : null}
              </div>
            </div>
          </SectionDivider>
        </>
      </Container>
    </div>
  );
};

export default Checkout;
