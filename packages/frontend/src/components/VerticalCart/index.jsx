import { createPortal } from 'react-dom';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { XIcon } from '@heroicons/react/outline';
import VerticalCartItem from './VerticalCartItem';

import { Link } from 'react-router-dom';

import Backdrop from '../Backdrop';

const modal = document.getElementById('portal');

const VerticalCart = ({ onClose }) => {
  const elRef = useRef();
  const { cart, totalQty, totalPrice } = useSelector(state => state.cart);

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }
  document.body.classList.add('disable-scroll');
  useEffect(() => {
    modal.appendChild(elRef.current);

    return () => {
      modal.removeChild(elRef.current);
      document.body.classList.remove('disable-scroll');
    };
  }, []);

  return createPortal(
    <>
      <Backdrop onClose={onClose} />
      <div className='fixed inset-y-0 right-0 max-w-full flex z-50'>
        <div className='p-4'>
          <XIcon
            className='w-8 text-gray-300 cursor-pointer hover:text-gray-100'
            onClick={onClose}
          />
        </div>
        <div className='h-full flex flex-col bg-white w-[400px] p-4'>
          <h2 className='font-bold text-3xl mb-5 text-center'>Cart</h2>
          <div className='min-h-0 py-4 max-h-[80%] overflow-auto list-scroll px-2'>
            {cart && cart.length !== 0
              ? cart.map(({ product, quantity }) => (
                  <VerticalCartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                  />
                ))
              : ''}
          </div>
          <Link
            to='/cart'
            className='w-full bg-blue-500 text-center font-semibold text-white block mt-auto py-4 rounded-md text-lg'
          >
            Go to Cart
          </Link>
        </div>
      </div>
    </>,
    elRef.current
  );
};

export default VerticalCart;
