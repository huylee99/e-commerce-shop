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
  return (
    <>
      <NavigationBar />
      <Hero />
      <HorizontalCategoryBar />
      <PromotionSection />
      <PromotionBanner />
      <BestSeller />
      <SaleBanner />
      <Features />
      <Subscription />
    </>
  );
};

export default Home;
