import { useQuery } from '@/hooks/useQuery';

import SectionDivider from '@/components/SectionDivider';
import Container from '@/components/Container';
import Filters from '../Filters';
import Shop from '../Shop';

const MainShop = () => {
  let [query, setQuery] = useQuery();

  if (!query) {
    query = { limit: 12, categories: '', rating: '', price: '' };
  }

  const handleChange = event => {
    setQuery({ ...query, [event.target.name]: event.target.value });
  };

  return (
    <SectionDivider size='lg'>
      <Container size='md'>
        <div className='flex gap-10 w-full'>
          <div className='max-w-[25%] w-[25%]'>
            <Filters query={query} handleChange={handleChange} />
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
