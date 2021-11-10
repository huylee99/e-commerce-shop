import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';
import SectionDivider from '../SectionDivider';

const CartLayout = ({ containerSize }) => {
  return (
    <>
      <TopBar containerSize={containerSize} />
      <Header containerSize={containerSize} />
      <SectionDivider size='lg'>
        <Outlet />
      </SectionDivider>
      <Footer />
    </>
  );
};

CartLayout.propTypes = {
  containerSize: PropTypes.string,
};

export default CartLayout;
