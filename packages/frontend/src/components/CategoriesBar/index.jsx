import { useState, useRef } from 'react';
import { useClickOutside } from '@/hooks/useClickOutside';

import { MenuAlt1Icon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

import SectionDivider from '../SectionDivider';
import Container from '../Container';

const NavigationBar = () => {
  const [isShown, setShow] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isShown) {
      setShow(false);
    }
  });

  return (
    <SectionDivider size='sm'>
      <Container size='lg'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col cursor-pointer relative'>
            <div
              className='inline-flex items-center bg-primary px-5 py-2 text-white rounded-full'
              onClick={() => setShow(prevState => !prevState)}
            >
              <MenuAlt1Icon className='w-6 mr-3' />
              <span className='font-bold text-base mr-2'>All Departments</span>
              <ChevronDownIcon className='w-5' />
            </div>
            <div
              className={`absolute z-10 w-full mt-2 top-full bg-white rounded-xl shadow-custom-1 overflow-hidden ${
                !isShown ? 'hidden' : ''
              }`}
              ref={menuRef}
            >
              <ul>
                <li className='py-2 px-6 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100'>
                  <img
                    src='https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/rice.svg'
                    alt='rice'
                    className='w-5 inline-block align-top mr-3'
                  />
                  Vegetables
                </li>
                <li className='py-2 px-6 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100'>
                  <img
                    src='https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/meat-1.svg'
                    alt='fresh meat'
                    className='w-5 inline-block align-top mr-3'
                  />
                  Fresh Meat
                </li>
                <li className='py-2 px-6 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100'>
                  <img
                    src='https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/fish.svg'
                    alt='seafood'
                    className='w-5 inline-block align-top mr-3'
                  />
                  Seafood
                </li>
                <li className='py-2 px-6 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100'>
                  <img
                    src='https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/soy.svg'
                    alt='fruit'
                    className='w-5 inline-block align-top mr-3'
                  />
                  Fruits
                </li>
              </ul>
            </div>
          </div>
          <span className='font-bold text-base text-yellow-500'>
            FREE Shipping
          </span>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default NavigationBar;
