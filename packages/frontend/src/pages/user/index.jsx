import { Outlet } from 'react-router-dom';
import Container from '../../components/Container';
import VerticalTab from '@/pages/user/components/VerticalTab';
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionDivider from '../../components/SectionDivider';

const User = () => {
  return (
    <>
      <TopBar />
      <Header />
      <SectionDivider>
        <Container size='md'>
          <div className='flex items-start gap-5 w-full'>
            <div className='max-w-[25%] w-[25%]'>
              <VerticalTab />
            </div>
            <div className='max-w-[75%] w-[75%] border border-gray-200 rounded-md p-5 shadow-sm'>
              <Outlet />
            </div>
          </div>
        </Container>
      </SectionDivider>

      <Footer />
    </>
  );
};

export default User;
