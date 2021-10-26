import PropTypes from 'prop-types';
import { useState } from 'react';
import { UserIcon, ShoppingBagIcon, FolderIcon } from '@heroicons/react/solid';

const VerticalTab = ({ setTab }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className='flex rounded-md border border-gray-200 p-4 mb-10'>
        <img
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt='avatar'
          className='w-10 h-10 rounded-full mr-4'
        />
        <div className='flex flex-col items-start'>
          <span className='text-sm font-bold text-gray-400'>Welcome back,</span>
          <span className='font-bold text-base uppercase'>Huy Le</span>
        </div>
      </div>
      <div className='rounded-md border border-gray-200'>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div
              className='flex items-center cursor-pointer'
              onClick={() => setShow(prevState => !prevState)}
            >
              <UserIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                Account Settings
              </span>
            </div>
            <div
              className={`h-0 overflow-hidden opacity-0 ${
                show ? 'h-20 opacity-100 overflow-visible mt-2' : null
              } px-9 h-full transition-all duration-300`}
            >
              <ul>
                <li
                  className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'
                  onClick={() => setTab(0)}
                >
                  Profile Information
                </li>
                <li
                  className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'
                  onClick={() => setTab(1)}
                >
                  Change Password
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div
              className='flex items-center cursor-pointer'
              onClick={() => setShow(prevState => !prevState)}
            >
              <ShoppingBagIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                Orders
              </span>
            </div>
            <div
              className={`h-0 overflow-hidden opacity-0 ${
                show ? 'h-20 opacity-100 overflow-visible mt-2' : null
              } px-9 h-full transition-all duration-300`}
            >
              <ul>
                <li className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'>
                  Current Order
                </li>
                <li
                  className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'
                  onClick={() => setTab(2)}
                >
                  Order History
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div
              className='flex items-center cursor-pointer'
              onClick={() => setShow(prevState => !prevState)}
            >
              <FolderIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                My Stuff
              </span>
            </div>
            <div
              className={`h-0 overflow-hidden opacity-0 ${
                show ? 'h-20 opacity-100 overflow-visible mt-2' : null
              } px-9 h-full transition-all duration-300`}
            >
              <ul>
                <li
                  className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'
                  onClick={() => setTab(3)}
                >
                  Coupons
                </li>
                <li className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'>
                  Wishlist
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VerticalTab.propTypes = {
  setTab: PropTypes.func,
};

export default VerticalTab;
