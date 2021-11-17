import PropTypes from 'prop-types';

const ProductsArrangement = ({
  totalItems = 0,
  currentPage = 0,
  limit,
  handleChange,
}) => {
  const idxTo = currentPage * limit;
  const idxFrom = Math.ceil(idxTo / limit);

  return (
    <>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-dark font-bold text-3xl'>Shop</h2>
        <span className='font-semibold text-base text-gray-400'>
          Showing{' '}
          {totalItems > 0
            ? `${idxFrom}-${idxTo > totalItems ? totalItems : idxTo} of`
            : ''}{' '}
          {totalItems} item(s)
        </span>
      </div>
      <div className='p-2 bg-gray-200 rounded-3xl flex justify-between items-center mb-5'>
        <select
          className='py-1 px-4 appearance-none focus:outline-none rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400 cursor-pointer'
          name='limit'
          onChange={handleChange}
          value={limit}
        >
          <option value='12'>12 per page</option>
          <option value='24'>24 per page</option>
        </select>

        <div className='px-4 py-1 rounded-3xl bg-gray-50 text-sm font-semibold text-gray-400'>
          Default sorting
        </div>
      </div>
    </>
  );
};

ProductsArrangement.propTypes = {
  totalItems: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  limit: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default ProductsArrangement;
