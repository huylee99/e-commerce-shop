import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';

const CartLayout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default CartLayout;
