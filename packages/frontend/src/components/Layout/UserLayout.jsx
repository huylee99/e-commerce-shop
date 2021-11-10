import { Outlet } from 'react-router-dom';
import Container from '../Container';
import VerticalTab from '@/pages/user/components/VerticalTab';
import TopBar from '../TopBar';
import Header from '../Header';
import Footer from '../Footer';
import SectionDivider from '../SectionDivider';

const UserLayout = () => {
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

export default UserLayout;
