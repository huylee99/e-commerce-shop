import Container from '@/components/Container';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productRequest from '../../api/productAPI';

import NavigationBar from '@/components/CategoriesBar';
import BreadCrumb from '@/components/BreadCrumb';
import SectionDivider from '@/components/SectionDivider';

import ProductImgs from './components/ProductImgs';
import ProductDetail from './components/ProductDetail';

const Product = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  console.log(slug);
  const fetchProduct = async slug => {
    const code = slug.split('-').pop();

    productRequest
      .getProductByCode(code)
      .then(response => setProduct(response.data.product))
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    setIsLoading(true);
    if (slug) {
      fetchProduct(slug);
    } else {
      setIsLoading(false);
    }
  }, [slug]);

  return (
    <>
      <NavigationBar />
      <BreadCrumb />
      <SectionDivider size='lg'>
        <Container size='md'>
          <>
            {isLoading ? (
              'Loading...'
            ) : product ? (
              <div className='flex items-start gap-20'>
                <div className='w-1/2 flex items-start gap-5'>
                  <ProductImgs imgs={product.images} name={product.name} />
                </div>
                <div className='w-1/2'>
                  <ProductDetail product={product} />
                </div>
              </div>
            ) : (
              'No product found'
            )}
          </>
        </Container>
      </SectionDivider>
    </>
  );
};

export default Product;
