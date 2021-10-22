import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavigationBar from '@/components/CategoriesBar';
import Hero from './components/Hero';
import HorizontalCategoryBar from './components/HorizontalCategoryBar';
import PromotionSection from './components/PromotionSection';
import PromotionBanner from './components/PromotionBanner';
import BestSeller from './components/BestSeller';
import SaleBanner from './components/SaleBanner';
import Features from './components/Features';
import Subscription from './components/Subscription';
import Footer from './components/Footer';

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
      <Features />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Home;
