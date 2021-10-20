import ProductCard from '../ProductCard';

const ProductList = () => {
  return (
    <div className='flex items-stretch justify-between gap-5'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
