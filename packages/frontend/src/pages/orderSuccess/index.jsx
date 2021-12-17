import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CheckCircleIcon } from '@heroicons/react/outline';
import Container from '../../components/Container';

import orderRequest from '../../api/orderAPI';

const OrderSuccess = () => {
  const { search } = useLocation();
  const [isPlaced, setIsPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const orderId = new URLSearchParams(search).get('id');

  if (!orderId) {
    window.location.href = '/404';
  }

  const verifyOrder = async () => {
    setIsLoading(true);
    try {
      const response = await orderRequest.checkOrder(orderId);

      if (response.data.order) {
        setIsPlaced(true);
        setIsLoading(false);
      }
    } catch (error) {
      window.location.href = '/404';
    }
  };

  const navigateToTracking = () => {
    window.location.href = `/tracking?id=${orderId}`;
  };

  useEffect(() => {
    verifyOrder();
  }, []);

  return (
    <Container size='md'>
      <div>
        {isLoading ? (
          'Loading...'
        ) : isPlaced ? (
          <div className='text-center'>
            <CheckCircleIcon className='w-16 mx-auto mb-2 text-primary' />
            <h1 className='text-center text-dark font-bold text-2xl mb-2'>
              Your order is placed successfully!
            </h1>
            <p className='text-gray-500 font-medium text-lg mb-6'>
              Your order number is{' '}
              <span className='text-dark font-bold'>{orderId}</span>. You will
              receive a confirmation email shortly.
            </p>
            <button
              onClick={navigateToTracking}
              className='mx-auto px-6 py-3 bg-primary rounded-md text-white uppercase font-bold'
            >
              Track order
            </button>
          </div>
        ) : (
          'Your order is not valid'
        )}
      </div>
    </Container>
  );
};

export default OrderSuccess;
