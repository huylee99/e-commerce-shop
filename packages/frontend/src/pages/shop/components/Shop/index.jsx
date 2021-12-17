import axios from 'axios';
import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

import { stringifyQuery } from '@/helpers/URLHelpers';
import productRequest from '@/api/productAPI';
import ProductsArrangement from '../ProductsArrangement';

import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';

const Shop = ({ query, handleChange, setPage }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initial, setInitial] = useState(false);
  const scrollRef = useRef(null);

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
      if (!initial) {
        setInitial(true);
      } else {
        scrollRef.current.scrollIntoView({
          block: 'start',
        });
      }
      setLoading(false);
    }
  };

  return (
    <div className='relative'>
      <div ref={scrollRef}></div>
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
        <>
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
          <div>
            {data.totalPages > 1 ? (
              <div className='flex justify-center gap-2 mt-10'>
                {data.currentPage === 1 ? null : (
                  <button
                    className='mr-4 hover:underline hover:text-primary'
                    onClick={() => setPage(data.currentPage - 1)}
                  >
                    Previous
                  </button>
                )}

                {new Array(data.totalPages).fill('').map((_, index) => (
                  <button
                    className={`${
                      index + 1 === data.currentPage
                        ? 'bg-primary text-white'
                        : 'border border-primary'
                    } w-8 h-8 text-sm text-center rounded-sm hover:bg-primary hover:text-white font-semibold`}
                    key={index}
                    onClick={() => setPage(index + 1)}
                    disabled={index + 1 === data.currentPage}
                  >
                    {index + 1}
                  </button>
                ))}
                {data.currentPage === data.totalPages ? null : (
                  <button
                    className='ml-4 hover:underline hover:text-primary'
                    onClick={() => setPage(data.currentPage + 1)}
                  >
                    Next
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

Shop.propTypes = {
  query: PropTypes.any,
  handleChange: PropTypes.func,
};

export default Shop;
