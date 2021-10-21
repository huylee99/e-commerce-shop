import SectionHeader from '@/components/SectionHeader';
import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';
import ProductList from '@/components/ProductList';

const BestSeller = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <>
          <SectionHeader title='Best Seller' />
          <ProductList />
        </>
      </Container>
    </SectionDivider>
  );
};

export default BestSeller;
