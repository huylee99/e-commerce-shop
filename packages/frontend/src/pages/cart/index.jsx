import { Link } from 'react-router-dom';

import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import CartList from './components/CartList';
import CartSummary from './components/CartSummary';

import { useSelector } from 'react-redux';

const Cart = () => {
  const { cart, totalPrice } = useSelector(state => state.cart);

  return (
    <Container size='md'>
      <SectionDivider size='sm'>
        <>
          <h2 className='text-center text-4xl font-bold mb-10'>Cart</h2>
          {cart && cart.length !== 0 ? (
            <div className='flex items-start gap-10'>
              <div className='w-[70%]'>
                <CartList cart={cart} />
              </div>
              <div className='max-w-[30%] w-[30%]'>
                <CartSummary total={totalPrice} />
                <Link
                  className='w-full bg-blue-600 py-2 font-semibold rounded-md text-white block text-center'
                  to='/cart/checkout'
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          ) : (
            <div className='text-center my-5'>
              <span className='text-center font-semibold text-2xl block'>
                Your cart is empty...
              </span>
              <Link
                to='/shop'
                className='text-center text-green-600 hover:underline cursor-pointer'
              >
                Let's grab some items here!
              </Link>
            </div>
          )}
        </>
      </SectionDivider>
    </Container>
  );
};

export default Cart;
