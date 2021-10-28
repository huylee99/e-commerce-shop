import { useHistory } from 'react-router-dom';

import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import TopBar from '@/components/TopBar';
import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const Cart = () => {
  const history = useHistory();

  const navigate = () => {
    history.push('/cart/checkout');
  };

  return (
    <div className='wrapper'>
      <TopBar containerSize='md' />
      <Container size='md'>
        <>
          <SectionDivider size='sm'>
            <h2 className='text-center text-4xl font-bold'>Cart</h2>
          </SectionDivider>
          <SectionDivider size='sm'>
            <div className='flex items-start gap-10'>
              <div className='max-w-[70%] w-[70%]'>
                <div className='mb-10 h-[600px]'>
                  <div className='gap-4 h-[600px] list-scroll overflow-y-scroll border border-gray-200'>
                    <table className='min-w-full divide-y divide-gray-200'>
                      <thead className='bg-gray-100 sticky top-0'>
                        <tr>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Product
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Price
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Quantity
                          </th>
                          <th
                            scope='col'
                            className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                          >
                            Subtotal
                          </th>
                          <th></th>
                        </tr>
                      </thead>

                      <tbody className='bg-white divide-y divide-gray-200 h-[300px] overflow-y-scroll'>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='max-w-[30%] w-[30%]'>
                <CartSummary />
                <button
                  className='w-full bg-blue-600 py-2 font-semibold rounded-md text-white'
                  onClick={navigate}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </SectionDivider>
        </>
      </Container>
    </div>
  );
};

export default Cart;
