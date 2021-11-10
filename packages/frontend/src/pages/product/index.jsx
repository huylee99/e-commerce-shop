import Container from '@/components/Container';

import NavigationBar from '@/components/CategoriesBar';
import BreadCrumb from '@/components/BreadCrumb';
import SectionDivider from '@/components/SectionDivider';

import ProductImgs from './components/ProductImgs';
import ProductDetail from './components/ProductDetail';

const Product = () => {
  return (
    <>
      <NavigationBar />
      <BreadCrumb />
      <SectionDivider size='lg'>
        <Container size='md'>
          <div className='flex items-start gap-20'>
            <div className='w-1/2 flex items-start gap-5'>
              <ProductImgs />
            </div>
            <div className='w-1/2'>
              <ProductDetail />
            </div>
          </div>
        </Container>
      </SectionDivider>
    </>
  );
};

export default Product;
