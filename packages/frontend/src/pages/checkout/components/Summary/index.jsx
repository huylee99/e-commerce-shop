const Summary = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Summary</h2>
      <div className='mb-10'>
        <div className='flex justify-between items-center mb-1'>
          <span className='font-semibold'>Subtotal</span>{' '}
          <span className='font-bold'>100$</span>
        </div>
        <div className='flex justify-between items-center mb-2'>
          <span className='font-semibold'>Shipping</span>
          <span className='font-bold'>10$</span>
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

export default Summary;
