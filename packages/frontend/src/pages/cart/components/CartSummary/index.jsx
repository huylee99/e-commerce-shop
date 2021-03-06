import { useState } from 'react';
import { applyDiscount, removeDiscount } from '@/features/cart/actions';
import { TagIcon } from '@heroicons/react/outline';
import { XCircleIcon } from '@heroicons/react/solid';

const CartSummary = ({ summary }) => {
  const [value, setValue] = useState('');
  const { totalPrice, subTotal, discount, shippingFee } = summary;

  const { code, amount, isApplied } = discount;

  const handleSubmit = () => {
    if (isApplied) {
      return;
    }

    applyDiscount(value);
    setValue('');
  };

  const handleRemove = () => {
    removeDiscount();
  };

  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Cart Total</h2>
      <div className='mb-10'>
        <div className='flex justify-between items-center mb-1'>
          <span className='font-semibold'>Subtotal</span>
          <span className='font-bold'>{subTotal}$</span>
        </div>
        <div className='flex justify-between items-center mb-1'>
          <span className='font-semibold'>Shipping</span>
          <span className='font-bold'>${shippingFee}</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold mb-2 block'>Promo code</span>
          {code && (
            <span className='inline-flex items-center font-bold text-sm px-4 py-2 rounded-md bg-gray-100 leading-none mb-2 relative'>
              <TagIcon className='w-5 mr-2' />
              {code}
              <XCircleIcon
                className='w-4 text-red-500 absolute -right-1 -top-1 cursor-pointer'
                onClick={handleRemove}
              />
            </span>
          )}
          <div className='flex items-center justify-between border border-gray-200 rounded-md overflow-hidden p-1'>
            <input
              type='text'
              className='w-full focus:outline-none px-1 uppercase'
              value={value}
              onChange={event => setValue(event.target.value)}
            />
            <button
              type='button'
              className='bg-blue-500 text-sm rounded-md px-2 py-1 text-white font-bold ml-1'
              onClick={handleSubmit}
            >
              Apply
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center mb-5'>
          <span className='font-semibold mb-2 block'>Discount</span>
          <span className='font-bold text-green-500'>{amount}$</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-lg font-bold'>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
