import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/solid';

const RatingFilter = ({ handleChange }) => {
  return (
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
  );
};

RatingFilter.propTypes = {
  handleChange: PropTypes.func,
};

export default RatingFilter;
