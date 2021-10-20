import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';
import SectionHeader from '@/components/SectionHeader';
import ProductList from '@/components/ProductList';

const PromotionSection = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <>
          <SectionHeader title='Deal of the days.' />
          <ProductList />
        </>
      </Container>
    </SectionDivider>
  );
};

export default PromotionSection;
