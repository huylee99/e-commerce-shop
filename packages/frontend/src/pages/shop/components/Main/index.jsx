import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';
import Filters from '../Filters';
import Shop from '../Shop';

const MainShop = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='md'>
        <>
          <div className='flex gap-10 w-full'>
            <div className='max-w-[25%] w-[25%]'>
              <Filters />
            </div>
            <div className='max-w-[75%] w-[75%]'>
              <Shop />
            </div>
          </div>
        </>
      </Container>
    </SectionDivider>
  );
};

export default MainShop;
