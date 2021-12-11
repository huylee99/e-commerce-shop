import PropTypes from 'prop-types';

import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

import { increaseQty } from '../../features/cart/actions';

const ProductCard = ({ width, product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuth } = useSelector(state => state.auth);
  const { name, price, categories, images, _id, rating } = product;

  const onAddItem = () => {
    if (isAuth) {
      increaseQty({
        id: _id,
        quantity: 1,
      });
    } else {
      navigate(
        `${
          location.pathname ? `/login?redirect=${location.pathname}` : '/login'
        }`
      );
    }
  };

  return (
    <div
      className={`${width} shadow-md rounded-xl p-4 group relative overflow-hidden`}
    >
      <div className='flex flex-col h-full'>
        <div className='flex items-center mb-5'>
          <span className='px-2 py-1 mr-2 inline-flex text-sm leading-5 font-bold rounded-lg bg-yellow-100 text-yellow-600'>
            Hot
          </span>
          <span className='px-2 py-1 inline-flex text-sm leading-5 font-bold rounded-lg bg-red-100 text-red-600 mr-auto'>
            {'-10%'}
          </span>
          <HeartIcon className='w-6 inline-block text-gray-400 hover:text-red-600 cursor-pointer' />
        </div>
        <div className='w-full'>
          <img
            src={images[0]}
            alt={name}
            className='w-full object-contain min-h-[250px]'
          />
        </div>
        <div className='mt-auto'>
          <div className='productRate mb-1'>
            {[...new Array(5)].map((_, index) => (
              <StarIcon
                className={`w-4 inline-block  ${
                  index + 1 < rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
                key={index}
              />
            ))}
            <span className='inline-block ml-1 text-xs text-gray-500 font-bold'>
              ({rating})
            </span>
          </div>
          <span className='block text-xs text-gray-400 font-bold uppercase mb-1'>
            {categories.join(', ')}
          </span>
          <span className='block text-lg font-bold text-dark mb-1'>{name}</span>
          <div>
            {/* <span className='text-base font-bold line-through text-gray-500 inline-block mr-2'>
            {price}
          </span> */}
            <span className='text-xl font-extrabold text-red-600 inline-block'>
              ${price}
            </span>
          </div>
        </div>
      </div>
      <div className='absolute right-[5px] top-1/2 transform translate-x-[150%] group-hover:translate-x-0 transition-transform duration-200 z-20'>
        <ul>
          <li
            className='w-8 h-8 border border-gray-200 rounded-full leading-[28px] text-center text-gray-500 mb-1 cursor-pointer hover:bg-primary hover:text-white'
            onClick={onAddItem}
          >
            <ShoppingCartIcon className='w-4 inline-block' />
          </li>
          <li className='w-8 h-8 border border-gray-200 rounded-full leading-[28px] text-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white'>
            <SearchIcon className='w-4 inline-block' />
          </li>
        </ul>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  width: PropTypes.string,
  product: PropTypes.object,
};

export default ProductCard;
