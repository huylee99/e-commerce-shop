import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

const BreadCrumb = () => {
  return (
    <div>
      <SectionDivider size='sm'>
        <div className='text-gray-500 py-6 bg-gray-100'>
          <Container size='md'>
            <div className='font-bold'>
              <span>Home</span>
              <span className='mx-2'>{'>'}</span>
              <span className='text-primary'>Shop</span>
            </div>
          </Container>
        </div>
      </SectionDivider>
    </div>
  );
};

export default BreadCrumb;
