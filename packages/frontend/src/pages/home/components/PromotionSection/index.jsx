import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';
import SectionHeader from '@/components/SectionHeader';
import ProductList from '@/components/ProductList';

const PromotionSection = ({ products, isLoading }) => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <>
          <SectionHeader title='Deal of the days.' />
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

export default PromotionSection;
