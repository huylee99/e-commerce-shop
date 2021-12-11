import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';
import ProductList from '@/components/ProductList';

const BestSeller = ({ products, isLoading }) => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <>
          <SectionHeader title='Best Seller' />
          {isLoading ? (
            '...Loading'
          ) : products && products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            'Not found'
          )}
        </>
      </Container>
    </SectionDivider>
  );
};

export default BestSeller;
