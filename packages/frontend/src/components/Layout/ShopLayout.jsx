import { Outlet } from 'react-router-dom';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';

const ShopLayout = () => {
  return (
    <>
      <TopBar containerSize='md' />
      <Header containerSize='md' />
      <Outlet />
      <Footer containerSize='md' />
    </>
  );
};

export default ShopLayout;
