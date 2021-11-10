import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { UserIcon, ShoppingBagIcon, FolderIcon } from '@heroicons/react/solid';

const VerticalTab = () => {
  return (
    <>
      <div className='flex rounded-md border border-gray-200 p-4 mb-5'>
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
            <div className='flex items-center cursor-pointer'>
              <UserIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                Account Settings
              </span>
            </div>
            <div className='h-full mt-2 px-9'>
              <ul>
                <NavLink
                  to='/user/information'
                  className={link =>
                    `font-bold capitalize text-base py-2 cursor-pointer hover:text-primary block ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Profile Information
                </NavLink>
                <NavLink
                  to='/user/security'
                  className={link =>
                    `font-bold capitalize text-base py-2 cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Change Password
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div className='flex items-center cursor-pointer'>
              <ShoppingBagIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                Orders
              </span>
            </div>
            <div className='h-full mt-2 px-9'>
              <ul>
                <li className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'>
                  Current Order
                </li>
                <NavLink
                  to='/user/order-history'
                  className={link =>
                    `font-bold capitalize text-base py-2 cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Order History
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div className='flex items-center cursor-pointer'>
              <FolderIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                My Stuff
              </span>
            </div>
            <div className='h-full mt-2 px-9'>
              <ul>
                <NavLink
                  to='/user/coupons'
                  className={link =>
                    `font-bold capitalize text-base py-2 cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Coupons
                </NavLink>
                <li className='font-bold capitalize text-base py-2 cursor-pointer hover:text-primary'>
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
