import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavigationBar from '@/components/CategoriesBar';
import BreadCrumb from '@/components/BreadCrumb';
import ShopBanner from './components/ShopBanner';
import Container from '@/components/Container';
import MainShop from './components/Main';

const Shop = () => {
  return (
    <div className='wrapper'>
      <TopBar containerSize='md' />

      <header>
        <Container size='md'>
          <>
            <Header />
            <NavigationBar />
          </>
        </Container>
      </header>

      <BreadCrumb />

      <Container size='md'>
        <>
          <ShopBanner />
          <MainShop />
        </>
      </Container>
    </div>
  );
};

export default Shop;
