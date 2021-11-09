import PropTypes from 'prop-types';
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

const ProductCard = ({ width }) => {
  return (
    <div
      className={`${width} shadow-md rounded-xl p-4 group relative overflow-hidden`}
    >
      <div>
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
            src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
            alt='product'
            className='w-full object-contain min-h-[237px]'
          />
        </div>
        <div className='productRate mb-1'>
          {[...new Array(5)].map((_, index) => (
            <StarIcon
              className='w-4 inline-block text-yellow-400'
              key={index}
            />
          ))}
          <span className='inline-block ml-1 text-xs text-gray-500 font-bold'>
            {'(5)'}
          </span>
        </div>
        <span className='block text-xs text-gray-400 font-bold uppercase mb-1'>
          Fruits
        </span>
        <span className='block text-lg font-bold text-dark mb-1'>
          Watermelon
        </span>
        <div className=''>
          <span className='text-base font-bold line-through text-gray-500 inline-block mr-2'>
            $300
          </span>
          <span className='text-xl font-extrabold text-red-600 inline-block'>
            $250
          </span>
        </div>
      </div>
      <div className='absolute right-[5px] top-1/2 transform translate-x-[150%] group-hover:translate-x-0 transition-transform duration-200 z-20'>
        <ul>
          <li className='w-8 h-8 border border-gray-200 rounded-full leading-[28px] text-center text-gray-500 mb-1 cursor-pointer hover:bg-primary hover:text-white'>
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
};

export default ProductCard;
