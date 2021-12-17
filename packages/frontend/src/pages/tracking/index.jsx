import { CheckCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Stepper from '../checkout/components/Stepper';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import ProductTable from './components/ProductTable';
import ShippingInformation from './components/ShippingInformation';

import orderRequest from '../../api/orderAPI';
import { dateFormat } from '../../helpers/dateFormat';

const STEPS = [
  {
    id: 1,
    title: 'Confirmation',
    status: 'DONE',
  },
  {
    id: 2,
    title: 'Shipping',
    status: 'PENDING',
  },
  {
    id: 3,
    title: 'Delivered',
    status: 'PENDING',
  },
];

const Tracking = () => {
  const { search } = useLocation();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const orderId = new URLSearchParams(search).get('id');

  useEffect(() => {
    fetchOrder(orderId);
  }, [orderId]);

  const fetchOrder = async orderId => {
    setIsLoading(true);
    try {
      const response = await orderRequest.getOrder(orderId);

      if (response.data.message === 'GET_SUCCESSFULLY')
        setData(response.data.order);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className='py-10'>
        <Container size='sm'>
          <div>
            <h1
              onClick={() => (window.location.href = '/')}
              className='text-center text-4xl text-primary font-bold mb-5 cursor-pointer'
            >
              SuperMarket
            </h1>
            {isLoading ? (
              '...Loading'
            ) : data ? (
              <>
                <h2 className='text-center font-bold text-xl mb-2 text-dark'>
                  Order {'#'}
                  {orderId}
                </h2>

                <div className='flex justify-center mb-10 gap-8'>
                  <div>
                    <span className='font-bold'>Status:</span>{' '}
                    <span>
                      <CheckCircleIcon className='w-5 inline-block text-primary' />{' '}
                      Paid
                    </span>
                  </div>
                  <div>
                    <span className='font-bold'>Order Date: </span>
                    <span>{dateFormat(data.createdAt)}</span>
                  </div>
                  <div>
                    <span className='font-bold'>Update: </span>
                    <span>{dateFormat(data.updatedAt)}</span>
                  </div>
                </div>
                <div className='mb-5'>
                  <div className='bg-gray-100 text-lg px-4 py-2 font-bold rounded-md text-dark'>
                    Tracking
                  </div>
                  <div className='py-4'>
                    <Stepper steps={STEPS} />
                  </div>
                </div>
                <div className='mb-5'>
                  <ProductTable data={data} />
                </div>
                <ShippingInformation
                  shippingInformation={data.shippingInformation}
                />
              </>
            ) : (
              'Order not found'
            )}
          </div>
        </Container>
      </div>
      <Footer containerSize='md' />
    </>
  );
};

export default Tracking;
