import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/outline';

import Container from '../Container';
import SectionDivider from '../SectionDivider';
import ContactPhone from '@/pages/home/components/ContactPhone';

const Header = () => {
  return (
    <SectionDivider size='sm'>
      <Container size='lg'>
        <div className='flex items-center justify-between'>
          <span className='font-bold text-3xl text-green-600'>SuperMarket</span>
          <div className='flex items-center'>
            <div>
              <ContactPhone />
            </div>
            <div className='bg-gray-300 h-12 w-[1px] mx-8'></div>
            <div className='text-dark font-bold text-base cursor-pointer hover:text-primary mr-4'>
              Sign In / Sign up
            </div>
            <div className='flex items-center justify-center gap-4'>
              <div className='w-11 h-11 border-2 border-gray-200 rounded-lg leading-[38px] text-center relative group hover:bg-primary hover:border-primary cursor-pointer transition-all'>
                <HeartIcon className='w-5 text-gray-400 group-hover:text-white inline-block' />
                <div className='w-5 h-5 leading-[20px] bg-blue-600 text-white text-xs font-bold rounded-full absolute -top-2 -right-2 text-center'>
                  <span>8</span>
                </div>
              </div>
              <div className='w-11 h-11 border-2 border-gray-200 rounded-lg leading-[38px] text-center relative group hover:bg-primary hover:border-primary cursor-pointer transition-all'>
                <ShoppingCartIcon className='w-5 text-gray-400 inline-block group-hover:text-white' />
                <div className='w-5 h-5 text-center leading-[20px] bg-red-600 text-white text-xs font-bold rounded-full absolute -top-2 -right-2'>
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default Header;
