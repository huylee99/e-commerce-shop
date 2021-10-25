import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavigationBar from '@/components/CategoriesBar';
import BreadCrumb from '@/components/BreadCrumb';

import Container from '@/components/Container';
import DashBoard from './components/Dashboard';

const User = () => {
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
          <DashBoard />
        </>
      </Container>
    </div>
  );
};

export default User;
