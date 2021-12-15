import { CheckCircleIcon } from '@heroicons/react/outline';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Stepper from '../checkout/components/Stepper';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import OrderItem from './components/OrderItem';

import orderRequest from '../../api/orderAPI';

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

                <div className='flex justify-center mb-10'>
                  <div className='mr-4'>
                    <span className='font-bold'>Status:</span>{' '}
                    <span>
                      <CheckCircleIcon className='w-5 inline-block text-primary' />{' '}
                      Paid
                    </span>
                  </div>
                  <div>
                    <span className='font-bold'>Date: </span>
                    <span>14:42 - 1 Oct, 2021</span>
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
                  <div className='bg-gray-100 text-lg px-4 py-2 font-bold rounded-md text-dark'>
                    Order Summary
                  </div>
                  <div className='py-4'>
                    <table className='min-w-full divide-y divide-gray-200 mb-5'>
                      <thead>
                        <tr>
                          <th
                            scope='col'
                            className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Product
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Quantity
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Price
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody className='bg-white divide-y divide-gray-200'>
                        {data &&
                          data.items.map(({ product, price, quantity }) => (
                            <OrderItem
                              key={product._id}
                              product={{
                                name: product.name,
                                price: price,
                                quantity: quantity,
                              }}
                            />
                          ))}
                      </tbody>
                    </table>
                    <div className='ml-auto w-1/3'>
                      <div className='flex justify-between'>
                        <span className='font-bold'>Subtotal: </span>
                        <span>${data.subTotal}</span>
                      </div>
                      <div className='text-primary flex justify-between'>
                        <span>Discount: </span>
                        <span>${data.discount}</span>
                      </div>
                      <div className='text-primary flex justify-between'>
                        <span>Shipping Fee: </span>
                        <span>${data.shippingFee}</span>
                      </div>
                      <span className='font-bold flex justify-between text-lg'>
                        <span>Total:</span>
                        <span>${data.totalPrice}</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className='bg-gray-100 text-lg px-4 py-2 font-bold rounded-md text-dark'>
                    Shipping Information
                  </div>
                  <div className='px-6 py-4'>
                    <div className='flex mb-4'>
                      <div className='w-1/2'>
                        <span className='font-bold'>Name: </span>
                        <span>{data.shippingInformation.fullName}</span>
                      </div>
                      <div className='w-1/2'>
                        <span className='font-bold'>Phone Number: </span>
                        <span>{data.shippingInformation.phone}</span>
                      </div>
                    </div>
                    <div>
                      <span className='font-bold'>Shipping Address: </span>
                      <span>{data.shippingInformation.address}</span>
                    </div>
                  </div>
                </div>
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
