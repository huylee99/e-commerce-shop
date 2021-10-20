import TopBar from '../../components/TopBar';
import Header from '../../components/Header';
import NavigationBar from '../../components/CategoriesBar';
import Hero from '../../components/Hero';

const Home = () => {
  return (
    <div className='wrapper'>
      <TopBar />
      <Header />
      <NavigationBar />
      <Hero />
    </div>
  );
};

export default Home;
