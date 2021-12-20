import { useState } from 'react';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import { useSelector } from 'react-redux';

import { increaseQty } from '../../../../features/cart/actions';
import { _isIncluded } from '../../../../helpers/_isIncluded';
import { toggleWishItem } from '../../../../features/wishlist/actions';

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { wishList } = useSelector(state => state.wishList);

  const { name, discount, price, unit, _id } = product;

  const handleClick = () => {
    setIsLoading(true);
    increaseQty({ id: _id, quantity }).finally(() => setIsLoading(false));
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev - 1 <= 0 ? 1 : prev - 1));
  };

  const handleIncrease = () => {
    setQuantity(prev => (prev + 1 > 10 ? 10 : prev + 1));
  };

  const handleWishClick = () => {
    setIsLoading(true);
    toggleWishItem(_id).finally(() => setIsLoading(false));
  };

  return (
    <div>
      <h2 className='font-bold text-3xl mb-4'>{name}</h2>
      <div>
        <span
          className={`${
            discount > 0 ? 'line-through text-gray-400' : 'text-dark'
          } inline-block align-middle text-2xl font-bold`}
        >
          ${price}
        </span>
        {discount > 0 && (
          <span className='inline-block text-3xl text-dark font-bold align-middle ml-2'>
            ${parseFloat(price - (price * discount) / 100).toFixed(2)}
          </span>
        )}
        <span className='align-bottom font-semibold text-lg'>/{unit}</span>
        {discount > 0 && (
          <span className='px-4 py-1 leading-5 font-bold rounded-md bg-red-100 text-red-600 align-middle ml-5'>
            -{discount}%
          </span>
        )}
        <div className='h-[1px] bg-gray-200 w-full my-5'></div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          asperiores explicabo accusantium eos deserunt nostrum laboriosam unde.
          Quis, natus explicabo.
        </div>
        <div className='h-[1px] bg-gray-200 w-full my-5'></div>
        <div className='mb-5'>
          <div className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg mr-5'>
            <MinusCircleIcon
              className='w-5 text-gray-500 cursor-pointer'
              onClick={handleDecrease}
            />
            <input
              type='number'
              className='w-6 mx-4 px-1 text-center focus:outline-none'
              value={quantity}
              disabled
            />
            <PlusCircleIcon
              className='w-5 text-gray-500 cursor-pointer'
              onClick={handleIncrease}
            />
          </div>
          <button
            type='button'
            className='inline-flex items-center px-6 py-2 bg-dark rounded-lg hover:bg-primary cursor-pointer disabled:opacity-40 disabled:pointer-events-none'
            onClick={handleClick}
            disabled={isLoading}
          >
            <ShoppingBagIcon className='w-5 text-white mr-2' />
            <span className='text-white'>Add to Cart</span>
          </button>
        </div>
        <button
          className='inline-flex items-center group cursor-pointer'
          disabled={isLoading}
          onClick={handleWishClick}
        >
          <div className='w-12 h-12 leading-[46px] text-center border border-gray-200 rounded-full group-hover:bg-primary mr-4 '>
            <HeartIcon className='inline-block w-6 group-hover:text-white' />
          </div>
          <span className='group-hover:text-primary'>
            {wishList && _isIncluded(wishList.products, _id)
              ? 'Remove from'
              : 'Add to'}{' '}
            Wishlist
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
