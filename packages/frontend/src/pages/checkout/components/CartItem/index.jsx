const CartItem = () => {
  return (
    <div className='flex items-start'>
      <div className='flex items-start'>
        <img
          src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
          alt='item'
          className='w-32 border border-gray-200 rounded-md mr-5'
        />
        <div>
          <h4 className='font-bold text-lg'>Watermelon</h4>
          <span>Quantity: 2</span>
        </div>
      </div>
      <div className='ml-auto'>
        <span className='font-bold text-lg'>300$</span>
      </div>
    </div>
  );
};

export default CartItem;
