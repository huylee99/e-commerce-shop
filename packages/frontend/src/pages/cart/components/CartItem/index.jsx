import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/outline';

const CartItem = () => {
  return (
    <tr>
      <td className='px-6 py-2 whitespace-nowrap flex items-center'>
        <img
          src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
          alt='watermelon'
          className='w-36 mr-2'
        />
        <span className='text-base font-bold text-gray-900 hover:text-blue-500 cursor-pointer'>
          Watermelon
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='text-base font-bold text-gray-900 hover:text-blue-500 cursor-pointer'>
          $250
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='inline-flex items-center p-2 border border-gray-300 rounded-sm'>
          <MinusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
          <input
            type='text'
            className='w-6 mx-4 px-1 text-center focus:outline-none'
          />
          <PlusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
        </span>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <span className='text-base font-bold text-gray-900 hover:text-blue-500 cursor-pointer'>
          $1000
        </span>
      </td>
      <td>
        <TrashIcon className='w-5 text-red-600' />
      </td>
    </tr>
  );
};

export default CartItem;
