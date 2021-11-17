import { useQuery } from '@/hooks/useQuery';

import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';
import Shop from '../Shop';

import CategoryFilter from '../Filters/CategoryFilter';
import PriceFilter from '../Filters/PriceFilter';
import RatingFilter from '../Filters/RatingFilter';

const MainShop = () => {
  let [query, setQuery] = useQuery();

  if (!query) {
    query = { limit: 12 };
  }

  const handleChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  const setQueryHandler = newFilter => {
    setQuery({ ...query, ...newFilter });
  };

  return (
    <SectionDivider size='lg'>
      <Container size='md'>
        <div className='flex gap-10 w-full'>
          <div className='max-w-[25%] w-[25%]'>
            <CategoryFilter
              handleChange={handleChange}
              categories={query.categories}
            />
            <PriceFilter
              setQueryHandler={setQueryHandler}
              queryPrice={query.price}
            />
            <RatingFilter handleChange={handleChange} />
          </div>
          <div className='max-w-[75%] w-[75%]'>
            <Shop query={query} handleChange={handleChange} />
          </div>
        </div>
      </Container>
    </SectionDivider>
  );
};

export default MainShop;
