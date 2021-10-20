import { Link } from 'react-router-dom';
import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const PromotionBanner = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <div className='flex gap-5 h-full max-h-[375px]'>
          <div className='rounded-xl overflow-hidden relative'>
            <img
              src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634764393/fruit/promote-3_grrtyp.jpg'
              alt='promote-1'
            />
            <div className='max-w-[180px] absolute z-30 right-[80px] bottom-[100px]'>
              <span className='capitalize block text-3xl text-white font-medium mb-2'>
                discover real organic flavors
              </span>
              <span className='text-sm font-bold uppercase text-white block mb-5'>
                Natural Fresh
              </span>
              <Link
                to='/'
                className='px-4 py-2 text-base font-semibold rounded-full bg-primary hover:bg-dark transition-all text-white'
              >
                Shop now
              </Link>
            </div>
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-10 z-20'></div>
          </div>
          <div className='rounded-xl overflow-hidden relative'>
            <img
              src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634764393/fruit/promote-2_ngmz4f.jpg'
              alt='promote-2'
            />
            <div className='max-w-[250px] absolute z-30 right-1/4 bottom-[100px] text-center'>
              <span className='text-sm font-bold uppercase text-gray-200 block mb-2'>
                Natural Fresh
              </span>
              <span className='capitalize block text-3xl text-gray-200 font-medium mb-4'>
                everyday fresh with organic
              </span>

              <Link
                to='/'
                className='px-4 py-2 text-base font-semibold rounded-full bg-dark hover:bg-primary-dark transition-all text-white'
              >
                Shop now
              </Link>
            </div>
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-40 z-20'></div>
          </div>
          <div className='rounded-xl overflow-hidden relative'>
            <img
              src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634764393/fruit/promote-1_ws2j7g.jpg'
              alt='promote-3'
            />
            <div className='max-w-[180px] absolute z-30 left-[30px] bottom-[100px]'>
              <span className='capitalize block text-3xl text-white font-medium mb-2'>
                grow only organic & food
              </span>
              <span className='text-sm font-bold uppercase text-white block mb-4'>
                Natural Fresh
              </span>
              <Link
                to='/'
                className='px-4 py-2 text-base font-semibold rounded-full bg-yellow-700 hover:bg-dark transition-all text-white'
              >
                Shop now
              </Link>
            </div>
            <div className='absolute inset-0 w-full h-full bg-black bg-opacity-40 z-20'></div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default PromotionBanner;
