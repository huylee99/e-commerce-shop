const Coupons = () => {
  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Coupons</h2>
      <div className='flex gap-4'>
        <div className='w-[300px] py-4 px-5 border-2 border-primary rounded-xl'>
          <h3 className='capitalize font-bold text-xl mb-2'>Save 30%</h3>
          <p className='text-sm font-medium text-gray-500 mb-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae iure iusto molestiae voluptatem rem adipisci.
          </p>
          <div className='flex items-center justify-between'>
            <span className='inline-block text-gray-400 text-sm font-bold'>
              Available: 1
            </span>
            <span className='inline-block font-bold text-sm px-4 py-2 bg-green-100 text-primary rounded-2xl leading-none'>
              SAVE30
            </span>
          </div>
        </div>
        <div className='w-[300px] py-4 px-5 border-2 border-primary rounded-xl'>
          <h3 className='capitalize font-bold text-xl mb-2'>Save 30%</h3>
          <p className='text-sm font-medium text-gray-500 mb-2'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae iure iusto molestiae voluptatem rem adipisci.
          </p>
          <div className='flex items-center justify-between'>
            <span className='inline-block text-gray-400 text-sm font-bold'>
              Available: 1
            </span>
            <span className='inline-block font-bold text-sm px-4 py-2 bg-green-100 text-primary rounded-2xl leading-none'>
              SAVE30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
