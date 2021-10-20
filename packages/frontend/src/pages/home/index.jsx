import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavigationBar from '@/components/CategoriesBar';
import Hero from './components/Hero';
import HorizontalCategoryBar from './components/HorizontalCategoryBar';
import PromotionSection from './components/PromotionSection';
import PromotionBanner from './components/PromotionBanner';
import BestSeller from './components/BestSeller';
import SaleBanner from './components/SaleBanner';

const Home = () => {
  return (
    <div className='wrapper'>
      <TopBar />
      <Header />
      <NavigationBar />
      <Hero />
      <HorizontalCategoryBar />
      <PromotionSection />
      <PromotionBanner />
      <BestSeller />
      <SaleBanner />
    </div>
  );
};

export default Home;
