import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import { useCheckout } from './context/checkoutContext';
import orderRequest from '@/api/orderAPI';

import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import Stepper from './components/Stepper';
import Shipping from './components/Shipping';
import Confirmation from './components/Confirmation';
import Summary from './components/Summary';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import PayButton from './components/PayButton';

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
];

const Checkout = () => {
  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [stepsState, setStepsState] = useState([...STEPS]);
  const { cart, auth } = useSelector(state => state);
  const [{ shippingInformation }] = useCheckout();

  const navigate = useNavigate();

  const renderStep = () => {
    switch (step) {
      case 0:
        return <Shipping userState={auth.user} />;
      case 1:
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
        return !shippingInformation;
      }
      default:
        return false;
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const items = cart.cart.map(({ product, quantity }) => ({
      product: product._id,
      quantity: quantity,
      price: product.price,
    }));

    const { _id, isApplied, amount } = cart.discount;

    const orderData = {
      email: auth.user.email,
      items: items,
      discount: { appliedDiscount: _id ?? '', isApplied, amount: +amount },
      totalPrice: cart.totalPrice,
      shippingFee: cart.shippingFee,
      subTotal: cart.subTotal,
      shippingInformation: shippingInformation,
    };

    try {
      const response = await orderRequest.createOrder(orderData);
      window.location.href = `/order/success?id=${response.data.orderId}`;
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
                  {step === 1 ? null : (
                    <button
                      className='px-6 text-sm py-2 border border-blue-600 bg-blue-600 rounded-md text-white font-semibold hover:text-blue-600 hover:bg-transparent transition-all ml-auto disabled:opacity-50 disabled:pointer-events-none'
                      onClick={handleNext}
                      disabled={disabledButton()}
                    >
                      Move to {STEPS[step + 1].title}
                    </button>
                  )}
                </div>
              </div>
              <div className='w-[30%]'>
                <Summary cartState={cart} />
                {step === 1 ? (
                  <>
                    <div className='relative flex justify-center before:w-full before:bg-black before:absolute before:left-0 before:h-1 before:top-1/2 before:transform before:-translate-y-1/2 text-center mb-2'>
                      <h2 className='inline-block relative bg-white px-2 font-bold'>
                        Checkout with Paypal
                      </h2>
                    </div>

                    <PayPalScriptProvider
                      options={{
                        'client-id': 'test',
                        components: 'buttons',
                        currency: 'USD',
                      }}
                    >
                      <PayButton
                        isLoading={isLoading}
                        callback={handleSubmit}
                        amount={cart.totalPrice}
                        showSpinner={false}
                      />
                    </PayPalScriptProvider>
                  </>
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
