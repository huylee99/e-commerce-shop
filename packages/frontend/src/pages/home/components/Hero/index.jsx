import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <SectionDivider size='sm'>
      <Container size='lg'>
        <div className='flex gap-4 h-full max-h-[650px]'>
          <div className='rounded-3xl overflow-hidden'>
            <img
              src='https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/slider2-3.jpg'
              alt='hero-1'
              className='object-cover h-full w-full'
            />
          </div>
          <div className='flex flex-col gap-4 h-full'>
            <div className='rounded-3xl overflow-hidden'>
              <img
                src='https://wpbingosite.com/wordpress/econis/wp-content/webp-express/webp-images/uploads/2021/05/img2-1.jpg.webp'
                alt='hero-2'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='rounded-3xl overflow-hidden'>
              <img
                src='https://wpbingosite.com/wordpress/econis/wp-content/webp-express/webp-images/uploads/2021/05/img2-2.jpg.webp'
                alt='hero-3'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default Hero;
