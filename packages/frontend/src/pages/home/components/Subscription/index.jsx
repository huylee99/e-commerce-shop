import { MailIcon } from '@heroicons/react/outline';

import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const Subscription = () => {
  return (
    <SectionDivider size='lg'>
      <div className='py-4 border border-gray-200'>
        <Container size='lg'>
          <div className='flex items-center justify-between'>
            <span className='font-bold text-3xl text-green-600'>
              SuperMarket
            </span>
            <div className='flex items-center'>
              <MailIcon className='w-8 text-primary' />
              <div className='bg-gray-300 h-12 w-[1px] mx-8'></div>
              <div className='mr-10'>
                <span className='inline-block font-bold text-base'>
                  SUBSCRIBE US
                </span>
                <span className='inline-block font-medium text-base text-gray-400'>
                  Subscribe and win a voucher of worth 250$
                </span>
              </div>
              <form className='w-full max-w-xs'>
                <div className='flex items-center'>
                  <input
                    type='text'
                    className='w-full focus:outline-none border-b-2 border-primary mr-6'
                    placeholder='Enter email address...'
                  />
                  <button className='uppercase text-sm font-bold border-b-2 border-primary mr-6 hover:text-primary'>
                    subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </SectionDivider>
  );
};

export default Subscription;
