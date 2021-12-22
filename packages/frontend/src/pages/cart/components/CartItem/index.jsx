import { useState, useEffect } from 'react';
import {
  increaseQty,
  decreaseQty,
  deleteItem,
} from '../../../../features/cart/actions';
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/outline';

const CartItem = ({ product, quantity }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { price, name, images, _id } = product;

  useEffect(() => {
    return setIsLoading(false);
  }, []);

  const handleDecrease = () => {
    setIsLoading(true);
    decreaseQty({
      id: _id,
      quantity: quantity - 1,
    })
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };

  const handleIncrease = () => {
    setIsLoading(true);
    increaseQty({
      id: _id,
      quantity: 1,
    }).finally(() => setIsLoading(false));
  };

  const handleDelete = () => {
    setIsLoading(true);
    deleteItem(_id).catch(() => setIsLoading(false));
  };

  return (
    <tr>
      <td className='px-6 py-2 whitespace-nowrap flex items-center'>
        <img src={`${images[0]}`} alt='watermelon' className='w-36 mr-2' />
        <span className='text-base font-bold text-gray-900 hover:text-blue-500 cursor-pointer'>
          {name}
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='text-base font-bold text-gray-900'>${price}</span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span
          className={`inline-flex items-center p-2 border border-gray-300 rounded-sm ${
            isLoading ? 'opacity-40 pointer-events-none' : ''
          }`}
        >
          <button type='button' onClick={handleDecrease} disabled={isLoading}>
            <MinusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
          </button>
          <input
            type='text'
            className='w-8 mx-4 px-1 text-center focus:outline-none'
            value={quantity}
            readOnly
          />
          <button type='button' onClick={handleIncrease} disabled={isLoading}>
            <PlusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
          </button>
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='text-base font-bold text-gray-900'>
          ${parseFloat(price * quantity).toFixed(2)}
        </span>
      </td>
      <td>
        <button type='button' disabled={isLoading}>
          <TrashIcon
            className='w-5 text-red-600 cursor-pointer hover:text-red-800'
            onClick={handleDelete}
          />
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
