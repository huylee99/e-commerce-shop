import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { stringifyQuery } from '@/helpers/URLHelpers';
import productRequest from '@/api/productAPI';

import ProductCard from '@/components/ProductCard';

const Shop = ({ query, handleChange }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    let queries = query ? stringifyQuery(query) : '';
    fetchData(queries);
    return () => source.cancel();
  }, [query]);

  const fetchData = async queries => {
    setLoading(true);
    try {
      const response = await productRequest.getProducts(queries);
      setData(response.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const idxTo = data.currentPage * query.limit;
  const idxFrom = Math.ceil(idxTo / query.limit);

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-dark font-bold text-3xl'>Shop</h2>
        <span className='font-semibold text-base text-gray-400'>
          {/* {`${totalItems > 0 ? {'Showing'} ${idxFrom}-${idxTo > data.totalItems ? data.totalItems : idxTo}'of'} : ''`} */}
          Showing{' '}
          {data.totalItems > 0
            ? `${idxFrom}-${
                idxTo > data.totalItems ? data.totalItems : idxTo
              } of`
            : ''}{' '}
          {data.totalItems} item(s)
        </span>
      </div>
      <div className='p-2 bg-gray-200 rounded-3xl flex justify-between items-center mb-5'>
        <select
          className='py-1 px-4 appearance-none focus:outline-none rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400 cursor-pointer'
          name='limit'
          onChange={handleChange}
          value={query.limit}
        >
          <option value='12'>12 per page</option>
          <option value='24'>24 per page</option>
        </select>

        <div className='px-4 py-1 rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400'>
          Default sorting
        </div>
      </div>
      {loading ? (
        'Loading...'
      ) : (
        <div className='flex flex-wrap gap-3 items-stretch'>
          {data.products.length === 0
            ? 'There is no product...'
            : data.products.map(product => (
                <ProductCard
                  key={product._id}
                  product={product}
                  width='w-[24%]'
                />
              ))}
        </div>
      )}
    </div>
  );
};

Shop.propTypes = {
  query: PropTypes.any,
  handleChange: PropTypes.func,
};

export default Shop;
