import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

const PriceFilter = ({ setQueryHandler, queryPrice = 0 }) => {
  const [price, setPrice] = useState(queryPrice);
  const timer = useRef();

  useEffect(() => {
    if (price > 0) {
      timer.current = setTimeout(() => setQueryHandler({ price }), 500);
    }

    return () => clearTimeout(timer.current);
  }, [price, setQueryHandler]);

  const handleChange = event => {
    setPrice(event.target.value);
  };

  return (
    <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
      <h3 className='text-dark font-bold text-2xl'>Price Range</h3>
      <div className='w-full h-[1px] bg-gray-300 mt-2 mb-5'></div>
      <div>
        <input
          type='range'
          name='price'
          id='price'
          min='0'
          max='100'
          step={`${100 - price <= 10 ? 100 - price - 1 : 5}`}
          value={price === 0 ? 100 : price}
          onChange={handleChange}
          className='w-full mb-2'
        />
        <span className='inline-block text-base text-gray-500 font-semibold'>
          Range: $0 - ${price === 0 ? 100 : price}
        </span>
      </div>
    </div>
  );
};

PriceFilter.propTypes = {
  setQueryHandler: PropTypes.func,
  queryPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default PriceFilter;
