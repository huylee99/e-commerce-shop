import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const ShopBanner = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <div className='w-full rounded-xl overflow-hidden relative'>
          <img
            src='https://wpbingosite.com/wordpress/econis/wp-content/webp-express/webp-images/uploads/2021/06/banner-shop-1.jpg.webp'
            alt='shop-banner'
            className='object-cover max-w-full min-h-[350px] h-[380px]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[400px] text-center text-gray-200'>
            <span className='font-bold block mb-2'>All Fruits Products</span>
            <h2 className='font-bold text-4xl mb-2'>
              Natural, Raw & Organic Protein Powders
            </h2>
            <span className='inline-block px-4 py-2 bg-red-500 rounded-md mb-2'>
              30% OFF CODE: SAVE30
            </span>
            <span className='block text-lg underline cursor-pointer'>
              Shop Now
            </span>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default ShopBanner;
