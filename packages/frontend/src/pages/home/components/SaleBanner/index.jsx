import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const SaleBanner = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <div className='flex gap-5 h-full max-h-[375px] w-full'>
          <div className='rounded-xl overflow-hidden w-[66.67%]'>
            <img
              src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634767709/fruit/pngegg_rcb4nu.jpg'
              alt='sale-banner-1'
              className='object-cover h-full w-full'
            />
          </div>
          <div className='rounded-xl overflow-hidden w-[33.33%]'>
            <img
              src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634768406/fruit/3957701_rotvgo.jpg'
              alt='sale-banner-2'
              className='object-cover h-full w-full'
            />
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default SaleBanner;
