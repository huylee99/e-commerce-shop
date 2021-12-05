import PropTypes from 'prop-types';
import { Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';
import SectionDivider from '../SectionDivider';

const CartLayout = ({ containerSize }) => {
  const { cart } = useSelector(state => state.cart);
  return (
    <>
      <TopBar containerSize={containerSize} />
      <Header containerSize={containerSize} />
      <SectionDivider size='lg'>
        {cart && cart.length > 0 ? (
          <Outlet />
        ) : (
          <div className='text-center my-5'>
            <span className='text-center font-semibold text-2xl block'>
              Your cart is empty...
            </span>
            <Link
              to='/shop'
              className='text-center text-green-600 hover:underline cursor-pointer'
            >
              Let&apos;s grab some items here!
            </Link>
          </div>
        )}
      </SectionDivider>
      <Footer />
    </>
  );
};

CartLayout.propTypes = {
  containerSize: PropTypes.string,
};

export default CartLayout;
