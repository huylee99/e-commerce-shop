import PropTypes from 'prop-types';

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

const CategoryFilter = ({ handleChange, categories }) => {
  return (
    <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
      <h3 className='text-dark font-bold text-2xl'>Categories</h3>
      <div className='w-full h-[1px] bg-gray-300 my-2'></div>
      <div>
        {CATEGORIES.map((category, index) => (
          <label
            key={index}
            htmlFor={`category-${index + 1}`}
            className={`p-2 font-semibold hover:text-primary hover:bg-gray-100 border-b border-dashed last:border-none cursor-pointer rounded-md block ${
              category.query === categories
                ? 'text-primary bg-gray-100'
                : 'text-gray-500'
            }`}
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
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func,
  categories: PropTypes.string,
};

export default CategoryFilter;
