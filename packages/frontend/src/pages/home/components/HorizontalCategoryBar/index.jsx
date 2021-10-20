import PropTypes from 'prop-types';

import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';

const categories = [
  {
    title: 'Vegetables',
    img: 'https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634698259/fruit/Fall-Vegetables-square-Small_ltualn.jpg',
  },
  {
    title: 'Fresh Meat',
    img: 'https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634698474/fruit/redMeat-849360782-770x553_owvdo7.jpg',
  },
  {
    title: 'Seafood',
    img: 'https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634700835/fruit/hai-san-ghe-song-tai-quan-7-tphcm_hv3rnk.jpg',
  },
  {
    title: 'Fruits',
    img: 'https://res.cloudinary.com/dlbkvfo8l/image/upload/v1634698523/fruit/20210606_142636_766862_tre-nen-an-qua-gi.max-800x800_a7xd5u.jpg',
  },
];

const HorizontalCategoryItem = ({ title, img }) => {
  return (
    <div className='flex flex-col items-center cursor-pointer group'>
      <div className='p-2 border border-transparent group-hover:border-primary rounded-full transition-all'>
        <div className='w-40 h-40 rounded-full overflow-hidden'>
          <img src={`${img}`} alt={title} className='h-full object-cover' />
        </div>
      </div>
      <div className='inline-block relative bg-white shadow-custom-1 rounded-full px-4 font-bold text-lg -mt-8 transform transition-transform group-hover:-translate-y-16'>
        {title}
      </div>
    </div>
  );
};

HorizontalCategoryItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const HorizontalCategoryBar = () => {
  return (
    <SectionDivider size='lg'>
      <Container size='lg'>
        <div className='flex items-center justify-center gap-5'>
          {categories.map(({ title, img }, index) => (
            <HorizontalCategoryItem title={title} img={img} key={index} />
          ))}
        </div>
      </Container>
    </SectionDivider>
  );
};

export default HorizontalCategoryBar;
