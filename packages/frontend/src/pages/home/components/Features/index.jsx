import { TruckIcon } from '@heroicons/react/outline';

import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const Features = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <div className='flex items-center gap-8'>
          <div className='flex items-center w-[25%] p-7 rounded-full border border-gray-200'>
            <TruckIcon className='w-12 mr-4 text-primary' />
            <div>
              <span className='block text-xl font-bold capitalize leading-6'>
                Free Worldwide Delivery
              </span>
              <span className='block text-base text-gray-500 font-medium'>
                Delivery from just $10
              </span>
            </div>
          </div>
          <div className='flex items-center w-[25%] p-7 rounded-full border border-gray-200'>
            <TruckIcon className='w-12 mr-4 text-primary' />
            <div>
              <span className='block text-xl font-bold capitalize leading-6'>
                Gift Cards
              </span>
              <span className='block text-base text-gray-500 font-medium'>
                For the small and big budgets
              </span>
            </div>
          </div>
          <div className='flex items-center w-[25%] p-7 rounded-full border border-gray-200'>
            <TruckIcon className='w-12 mr-4 text-primary' />
            <div>
              <span className='block text-xl font-bold capitalize leading-6'>
                Online Discount
              </span>
              <span className='block text-base text-gray-500 font-medium'>
                Additional multi-buy discount
              </span>
            </div>
          </div>
          <div className='flex items-center w-[25%] p-7 rounded-full border border-gray-200'>
            <TruckIcon className='w-12 mr-4 text-primary' />
            <div>
              <span className='block text-xl font-bold capitalize leading-6'>
                100% Natural
              </span>
              <span className='block text-base text-gray-500 font-medium'>
                Grow only organic food
              </span>
            </div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default Features;
