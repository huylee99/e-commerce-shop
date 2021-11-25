import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  LogoutIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import SectionDivider from '../SectionDivider';
import ContactPhone from '../ContactPhone';
import Container from '../Container';
import VerticalCart from '../VerticalCart';
import authService from '../../services/authServices';

import { useClickOutside } from '../../hooks/useClickOutside';

const Header = ({ containerSize = 'lg' }) => {
  const { totalQty } = useSelector(state => state.cart);
  const { isAuth, user } = useSelector(state => state.auth);
  const [isShow, setIsShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);
  const profileMenuRef = useRef();

  useClickOutside(profileMenuRef, () => setProfileShow(false));

  const logout = () => {
    authService.logOut();
  };

  return (
    <SectionDivider size='sm'>
      <Container size={containerSize}>
        <div className='flex items-center justify-between'>
          <Link to='/' className='font-bold text-3xl text-green-600'>
            SuperMarket
          </Link>
          <div className='flex items-center'>
            <div>
              <ContactPhone />
            </div>
            <div className='bg-gray-300 h-12 w-[1px] mx-8'></div>
            <div className='relative'>
              <div className='text-dark block font-bold text-base cursor-pointer hover:text-primary mr-6 '>
                {isAuth ? (
                  <span
                    onClick={() => setProfileShow(true)}
                    ref={profileMenuRef}
                  >
                    Hi, {user.fullName}
                  </span>
                ) : (
                  <Link to={'/login'}>Sign In / Sign Up</Link>
                )}
              </div>
              {isAuth && profileShow ? (
                <div className='absolute bottom-[-92px] left-0 w-[205px] border rounded-md border-gray-100 shadow-sm z-50'>
                  <Link
                    to='/user'
                    className='flex bg-white p-2 text-gray-500 items-center hover:text-primary font-semibold'
                  >
                    <UserIcon className='w-5 mr-2' />
                    Profile
                  </Link>
                  <button
                    className='flex bg-white w-full p-2 text-gray-500 items-center hover:text-primary font-semibold'
                    onClick={logout}
                  >
                    <LogoutIcon className='w-5 mr-2' />
                    Sign Out
                  </button>
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='flex items-center justify-center gap-4'>
              <div className='w-11 h-11 border-2 border-gray-200 rounded-lg leading-[38px] text-center relative group hover:bg-primary hover:border-primary cursor-pointer transition-all'>
                <HeartIcon className='w-5 text-gray-400 group-hover:text-white inline-block' />
                <div className='w-5 h-5 leading-[20px] bg-blue-600 text-white text-xs font-bold rounded-full absolute -top-2 -right-2 text-center'>
                  <span>0</span>
                </div>
              </div>
              <div
                className='w-11 h-11 border-2 border-gray-200 rounded-lg leading-[38px] text-center relative group hover:bg-primary hover:border-primary cursor-pointer transition-all'
                onClick={() => setIsShow(true)}
              >
                <ShoppingCartIcon className='w-5 text-gray-400 inline-block group-hover:text-white' />
                <div className='w-5 h-5 text-center leading-[20px] bg-red-600 text-white text-xs font-bold rounded-full absolute -top-2 -right-2'>
                  <span>{totalQty}</span>
                </div>
              </div>
              {isShow && <VerticalCart onClose={() => setIsShow(false)} />}
            </div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

Header.propTypes = {
  containerSize: PropTypes.string,
};

export default Header;
