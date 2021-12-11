import ProductCard from '../ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className='flex items-stretch gap-5 flex-wrap'>
      {products.map(product => (
        <ProductCard
          width='w-[calc(20%-25px)]'
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductList;
