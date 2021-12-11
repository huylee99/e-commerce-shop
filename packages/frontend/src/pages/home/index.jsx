import { useEffect, useState } from 'react';
import productRequest from '../../api/productAPI';

import NavigationBar from '@/components/CategoriesBar';
import Hero from './components/Hero';
import HorizontalCategoryBar from './components/HorizontalCategoryBar';
import PromotionSection from './components/PromotionSection';
import PromotionBanner from './components/PromotionBanner';
import BestSeller from './components/BestSeller';
import SaleBanner from './components/SaleBanner';
import Features from './components/Features';
import Subscription from './components/Subscription';

const Home = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await productRequest.getProducts();
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavigationBar />
      <Hero />
      <HorizontalCategoryBar />
      <PromotionSection products={products} isLoading={isLoading} />
      <PromotionBanner />
      <BestSeller products={products} isLoading={isLoading} />
      <SaleBanner />
      <Features />
      <Subscription />
    </>
  );
};

export default Home;
