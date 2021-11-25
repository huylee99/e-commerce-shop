import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { stringifyQuery } from '@/helpers/URLHelpers';
import productRequest from '@/api/productAPI';
import ProductsArrangement from '../ProductsArrangement';

import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';

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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      <ProductsArrangement
        handleChange={handleChange}
        totalItems={data.totalItems}
        currentPage={data.currentPage}
        limit={query.limit}
      />
      {loading ? (
        <div className='mt-[100px]'>
          <LoadingSpinner size={12} />
        </div>
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
