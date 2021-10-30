import {
  MinusCircleIcon,
  PlusCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
} from '@heroicons/react/outline';

const ProductDetail = () => {
  return (
    <div>
      <h2 className='font-bold text-3xl mb-4'>Watermelon</h2>
      <div>
        <span className='inline-block text-xl line-through text-gray-400 font-bold mr-2'>
          $300.00
        </span>
        <span className='inline-block text-2xl text-dark font-bold mr-5'>
          $250.00
        </span>
        <span className='px-4 py-1 inline-flex leading-5 font-bold rounded-md bg-red-100 text-red-600 mr-auto align-top'>
          {'-10%'}
        </span>
        <div className='h-[1px] bg-gray-200 w-full my-5'></div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
          asperiores explicabo accusantium eos deserunt nostrum laboriosam unde.
          Quis, natus explicabo.
        </div>
        <div className='h-[1px] bg-gray-200 w-full my-5'></div>
        <div className='mb-5'>
          <div className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg mr-5'>
            <MinusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
            <input
              type='text'
              className='w-6 mx-4 px-1 text-center focus:outline-none'
              defaultValue={0}
            />
            <PlusCircleIcon className='w-5 text-gray-500 cursor-pointer' />
          </div>
          <div className='inline-flex items-center px-6 py-2 bg-dark rounded-lg hover:bg-primary cursor-pointer'>
            <ShoppingBagIcon className='w-5 text-white mr-2' />
            <span className='text-white'>Add to Cart</span>
          </div>
        </div>
        <div className='inline-flex items-center group cursor-pointer'>
          <div className='w-12 h-12 leading-[46px] text-center border border-gray-200 rounded-full group-hover:bg-primary mr-4 '>
            <HeartIcon className='inline-block w-6 group-hover:text-white' />
          </div>
          <span className='group-hover:text-primary'>Add to Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
