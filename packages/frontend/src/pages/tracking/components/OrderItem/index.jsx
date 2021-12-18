const OrderItem = ({ product }) => {
  const { name, quantity, price, unit, slug } = product;

  return (
    <tr>
      <td className='px-6 py-2 whitespace-nowrap'>
        <a
          href={`product/${slug.url}`}
          className='text-base font-medium text-gray-900 underline hover:text-blue-500 cursor-pointer'
          target='_blank'
          rel='noreferrer'
        >
          {name}
        </a>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <div className='text-base font-medium text-gray-900'>{quantity}</div>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <div className='text-base font-medium text-gray-900'>{unit}</div>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <div className='text-base font-medium text-gray-900'>${price}</div>
      </td>
      <td className='px-6 py-2 whitespace-nowrap'>
        <div className='text-base font-medium text-gray-900'>
          ${parseFloat(quantity * price).toFixed(2)}
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
