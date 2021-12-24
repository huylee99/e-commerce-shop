import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { UserIcon, ShoppingBagIcon, FolderIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';

import { signOut } from '@/features/user/actions';

import Button from '@/components/Button';

const VerticalMenu = () => {
  const { fullName } = useSelector(state => state.auth.user);

  const clickHandler = () => {
    signOut();
    window.location.reload();
  };

  return (
    <>
      <div className='flex rounded-md border border-gray-200 p-4 mb-5'>
        <img
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt='avatar'
          className='w-10 h-10 rounded-full mr-4'
        />
        <div className='flex items-center justify-between w-full'>
          <div>
            <span className='text-sm font-bold text-gray-400'>
              Welcome back,
            </span>
            <span className='font-bold text-base uppercase block'>
              {fullName}
            </span>
          </div>
          <Button onClick={clickHandler}>Log out</Button>
        </div>
      </div>
      <div className='rounded-md border border-gray-200'>
        <div className='border-b border-gray-200'>
          <div className='p-4'>
            <div className='flex items-center cursor-pointer py-2'>
              <UserIcon className='w-5 text-primary mr-4' />
              <span className='text-gray-500 font-bold text-sm uppercase'>
                Account Settings
              </span>
            </div>
            <div className='mt-2 px-9'>
              <ul>
                <NavLink
                  to='/user/information'
                  className={link =>
                    `font-bold capitalize text-base py-1 cursor-pointer hover:text-primary block ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Profile Information
                </NavLink>
                <NavLink
                  to='/user/security'
                  className={link =>
                    `font-bold capitalize text-base py-1 block cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Change Password
                </NavLink>
                <NavLink
                  to='/user/addresses'
                  className={link =>
                    `font-bold capitalize text-base py-1 block cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Manage Addresses
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
            <div className='mt-2 px-9'>
              <ul>
                {/* <li className='font-bold text-dark capitalize text-base py-2 cursor-pointer hover:text-primary'>
                  Current Order
                </li> */}
                <NavLink
                  to='/user/order-history'
                  className={link =>
                    `font-bold capitalize text-base py-1 cursor-pointer block hover:text-primary ${
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
            <div className='mt-2 px-9'>
              <ul>
                <NavLink
                  to='/user/coupons'
                  className={link =>
                    `font-bold capitalize text-base py-1 block cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Coupons
                </NavLink>
                <NavLink
                  to='/user/wish-list'
                  className={link =>
                    `font-bold capitalize text-base py-1 block cursor-pointer hover:text-primary ${
                      link.isActive ? 'text-primary' : 'text-dark'
                    }`
                  }
                >
                  Wish List
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

VerticalMenu.propTypes = {
  setTab: PropTypes.func,
};

export default VerticalMenu;
