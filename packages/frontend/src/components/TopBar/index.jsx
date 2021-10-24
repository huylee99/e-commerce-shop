import PropTypes from 'prop-types';
import { LocationMarkerIcon, MailIcon } from '@heroicons/react/outline';

import Container from '../Container';

const TopBar = ({ containerSize }) => {
  return (
    <div className='border border-b-1 border-gray-100'>
      <Container size={containerSize ? containerSize : 'lg'}>
        <div className='flex items-center justify-between py-3'>
          <div className='flex items-center'>
            <div className='flex items-center text-gray-500'>
              <LocationMarkerIcon className='w-5 mr-2' />
              <span className='text-[13px] font-medium hover:text-green-600 cursor-pointer'>
                Find Store
              </span>
            </div>
            <div className='bg-gray-300 h-5 w-[1px] mx-4'></div>
            <div className='flex items-center text-gray-500'>
              <MailIcon className='w-5 mr-2' />
              <span className='text-[13px] font-medium hover:text-green-600 cursor-pointer'>
                huylee@ahng.xyz
              </span>
            </div>
          </div>
          <div className='flex items-center text-gray-500'>
            <span className='text-[13px] font-medium hover:text-green-600 cursor-pointer'>
              Contact
            </span>
            <div className='bg-gray-300 h-5 w-[1px] mx-4'></div>
            <span className='text-[13px] font-medium hover:text-green-600 cursor-pointer'>
              Track Your Order
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

TopBar.propTypes = {
  containerSize: PropTypes.string,
};

export default TopBar;
