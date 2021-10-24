import ProductCard from '@/components/ProductCard';

const Shop = () => {
  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-dark font-bold text-3xl'>Shop</h2>
        <span className='font-semibold text-base text-gray-400'>
          Showing 1-15 of 33 item(s)
        </span>
      </div>
      <div className='p-2 bg-gray-200 rounded-3xl flex justify-between items-center mb-5'>
        <div className='px-4 py-1 rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400'>
          Show 15
        </div>

        <div className='px-4 py-1 rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400'>
          Default sorting
        </div>
      </div>
      <div className='flex flex-wrap gap-3 items-stretch'>
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
        <ProductCard width='w-[24%]' />
      </div>
    </div>
  );
};

export default Shop;
