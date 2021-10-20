import Container from '@/components/Container';
import SectionDivider from '@/components/SectionDivider';

import ProductList from '@/components/ProductList';

const PromotionSection = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <>
          <h2 className='text-center text-5xl font-bold text-dark mb-10'>
            Deal of the days.
          </h2>
          <ProductList />
        </>
      </Container>
    </SectionDivider>
  );
};

export default PromotionSection;
