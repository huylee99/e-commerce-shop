import { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid';

import { useQuery } from '@/hooks/useQuery';
import { stringifyQuery } from '@/helpers/URLHelpers';
import productRequest from '@/api/productAPI';

const CATEGORIES = [
  {
    title: 'Vegetables',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/rice.svg',
    query: 'vegetables',
  },
  {
    title: 'Fresh Meat',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/meat.svg',
    query: 'meat',
  },
  {
    title: 'Seafood',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/fish.svg',
    query: 'seafood',
  },
  {
    title: 'Fruits',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/soy.svg',
    query: 'fruits',
  },
];

const Filters = () => {
  const [price] = useState(21);
  const [value, setValue] = useQuery();
  const [, setData] = useState();

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    let queries = value ? stringifyQuery(value) : '';
    fetchData(queries);
    return () => source.cancel();
  }, [value]);

  const fetchData = async queries => {
    const response = await productRequest.getProducts(queries);
    setData(response.data);
  };

  const handleChange = event => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <div className='w-full'>
      <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
        <h3 className='text-dark font-bold text-2xl'>Categories</h3>
        <div className='w-full h-[1px] bg-gray-300 my-2'></div>
        <div>
          {CATEGORIES.map((category, index) => (
            <label
              key={index}
              htmlFor={`category-${index + 1}`}
              className='p-2 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100 border-b border-dashed last:border-none cursor-pointer rounded-md block'
            >
              <img
                src={`${category.icon}`}
                alt={`${category.title}`}
                className='w-5 inline-block align-top mr-3'
              />
              <input
                type='radio'
                name='categories'
                id={`category-${index + 1}`}
                value={category.query}
                className='sr-only'
                onChange={handleChange}
              />
              {category.title}
            </label>
          ))}
        </div>
      </div>
      <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
        <h3 className='text-dark font-bold text-2xl'>Price Range</h3>
        <div className='w-full h-[1px] bg-gray-300 mt-2 mb-5'></div>

        <div>
          <input
            type='range'
            name='price'
            id='price'
            min='21'
            max='350'
            step={`${350 - price <= 10 ? 350 - price - 1 : 10}`}
            value={price}
            onChange={() => console.log('done')}
            className='w-full mb-2'
          />
          <span className='inline-block text-base text-gray-500 font-semibold'>
            Range: $21 - {`$${price}`}
          </span>
        </div>
      </div>

      <div className='px-8 py-6 rounded-xl border border-gray-200'>
        <h3 className='text-dark font-bold text-2xl'>Rating</h3>
        <div className='w-full h-[1px] bg-gray-300 mt-2 mb-5'></div>
        <div>
          {[
            ...new Array(5).fill(0).map((_, index) => (
              <div key={index} className='flex items-center mb-2 last:mb-0'>
                <label htmlFor={`rating-${index + 1}`}>
                  <input
                    type='radio'
                    name='rating'
                    id={`rating-${index + 1}`}
                    className='mr-2 cursor-pointer inline-block align-middle'
                    value={5 - index}
                    onChange={handleChange}
                  />
                  <div className='inline-flex items-center align-middle'>
                    {[
                      ...new Array(5)
                        .fill(0)
                        .map((_, idx) => (
                          <StarIcon
                            key={idx}
                            className={`${
                              4 - idx >= index
                                ? 'text-yellow-500'
                                : 'text-gray-300'
                            } inline-block mr-1 last:mr-0 w-5`}
                          />
                        )),
                    ]}
                  </div>
                </label>
              </div>
            )),
          ]}
        </div>
      </div>
    </div>
  );
};

export default Filters;
