const CartItem = ({ product, quantity }) => {
  const { name, price, images } = product;
  return (
    <div className='flex items-start'>
      <div className='flex items-start'>
        <img
          src={images[0]}
          alt={name}
          className='w-32 border border-gray-200 rounded-md mr-5'
        />
        <div>
          <h4 className='font-bold text-lg'>{name}</h4>
          <span>Quantity: {quantity}</span>
        </div>
      </div>
      <div className='ml-auto'>
        <span className='font-bold text-lg'>
          ${parseFloat(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
