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
  const { price, name, images, _id } = product;

  const onDecrease = () => {
    decreaseQty({
      id: _id,
      quantity: quantity - 1,
    });
  };

  const onIncrease = () => {
    increaseQty({
      id: _id,
      quantity: 1,
    });
  };

  const onDelete = () => {
    deleteItem(_id);
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
        <span className='inline-flex items-center p-2 border border-gray-300 rounded-sm'>
          <MinusCircleIcon
            className='w-5 text-gray-500 cursor-pointer'
            onClick={onDecrease}
          />
          <input
            type='text'
            className='w-8 mx-4 px-1 text-center focus:outline-none'
            value={quantity}
            onChange={e => console.log(e.target.value)}
          />
          <PlusCircleIcon
            className='w-5 text-gray-500 cursor-pointer'
            onClick={onIncrease}
          />
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='text-base font-bold text-gray-900'>
          ${parseFloat(price * quantity).toFixed(2)}
        </span>
      </td>
      <td>
        <TrashIcon
          className='w-5 text-red-600 cursor-pointer hover:text-red-800'
          onClick={onDelete}
        />
      </td>
    </tr>
  );
};

export default CartItem;
