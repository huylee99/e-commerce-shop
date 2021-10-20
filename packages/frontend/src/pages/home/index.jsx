import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import NavigationBar from '@/components/CategoriesBar';
import Hero from './components/Hero';
import HorizontalCategoryBar from './components/HorizontalCategoryBar';
import PromotionSection from './components/PromotionSection';

const Home = () => {
  return (
    <div className='wrapper'>
      <TopBar />
      <Header />
      <NavigationBar />
      <Hero />
      <HorizontalCategoryBar />
      <PromotionSection />
    </div>
  );
};

export default Home;
