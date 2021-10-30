const ProductImgs = () => {
  return (
    <>
      <div className='flex flex-col w-[100px] gap-2'>
        <div className='border border-gray-200 rounded-md'>
          <img
            src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
            alt='water'
          />
        </div>
        <div className='border border-gray-200 rounded-md'>
          <img
            src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
            alt='water'
          />
        </div>
        <div className='border border-gray-200 rounded-md'>
          <img
            src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
            alt='water'
          />
        </div>
      </div>
      <div className='w-[600px] max-h-[600px] rounded-lg overflow-hidden border border-gray-200'>
        <img
          src='https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634703312/fruit/unnamed_rfiaj5.png'
          alt='water'
          className='h-full w-full object-cover'
        />
      </div>
    </>
  );
};

export default ProductImgs;
