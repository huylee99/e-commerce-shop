const CartSummary = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Cart Total</h2>
      <div className='mb-10'>
        <div className='flex justify-between items-center mb-1'>
          <span className='font-semibold'>Subtotal</span>
          <span className='font-bold'>100$</span>
        </div>
        <div className='flex justify-between items-center mb-1'>
          <span className='font-semibold'>Shipping</span>
          <span className='font-bold'>10$</span>
        </div>
        <div className='mb-2'>
          <span className='font-semibold mb-2 block'>Promo code</span>
          <div className='flex items-center justify-between border border-gray-200 rounded-md overflow-hidden p-1'>
            <input
              type='text'
              className='w-full focus:outline-none px-1 uppercase'
            />
            <button className='bg-blue-500 text-sm rounded-md px-2 py-1 text-white font-bold ml-1'>
              Apply
            </button>
          </div>
        </div>
        <div className='flex justify-between items-center mb-5'>
          <span className='font-semibold mb-2 block'>Discount</span>
          <span className='font-bold text-green-500'>{'-10$'}</span>
        </div>
        <div className='flex justify-between items-center'>
          <span className='text-lg font-bold'>Total</span>
          <span className='text-lg font-bold'>110$</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
