import { useState, useRef, useEffect } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useTooltip } from '@/hooks/useTooltip';

const CATEGORIES = [
  {
    title: 'Vegetables',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/rice.svg',
  },
  {
    title: 'Fresh Meat',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/meat.svg',
  },
  {
    title: 'Seafood',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/fish.svg',
  },
  {
    title: 'Fruits',
    icon: 'https://wpbingosite.com/wordpress/econis/wp-content/uploads/2021/06/soy.svg',
  },
];

const Filters = () => {
  const [price, setPrice] = useState(21);
  const timerRef = useRef();
  const areaRef = useRef();

  const { positionRef, show, onMouseMove, onMouseDown, onMouseLeave } =
    useTooltip();

  useEffect(() => {
    timerRef.current = setTimeout(() => console.log(price), 500);

    return () => clearTimeout(timerRef.current);
  }, [price]);

  const handleChange = event => {
    setPrice(event.target.value);
  };

  return (
    <div className='w-full'>
      <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
        <h3 className='text-dark font-bold text-2xl'>Categories</h3>
        <div className='w-full h-[1px] bg-gray-300 my-2'></div>
        <div>
          <ul>
            {CATEGORIES.map((category, index) => (
              <li
                key={index}
                className='p-2 text-gray-500 font-semibold hover:text-primary hover:bg-gray-100 border-b border-dashed last:border-none cursor-pointer rounded-md'
              >
                <img
                  src={`${category.icon}`}
                  alt={`${category.title}`}
                  className='w-5 inline-block align-top mr-3'
                />
                {category.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='px-8 py-6 rounded-xl border border-gray-200 mb-10'>
        <h3 className='text-dark font-bold text-2xl'>Price Range</h3>
        <div className='w-full h-[1px] bg-gray-300 mt-2 mb-5'></div>

        <div className='relative'>
          {show ? (
            <div
              style={{
                top: -30,
                left: positionRef.current.x - 298,
                zIndex: 50,
              }}
              className='text-white absolute bg-black px-2 rounded-md tooltip'
            >
              ${price}
            </div>
          ) : (
            ''
          )}

          <input
            type='range'
            name='price'
            id='price'
            min='21'
            max='350'
            step={`${350 - price <= 10 ? 350 - price - 1 : 10}`}
            value={price}
            onChange={handleChange}
            className='w-full mb-2'
            onMouseMove={onMouseMove}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseLeave}
            ref={areaRef}
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
                <input
                  type='radio'
                  name='rating'
                  id={`rating-${index + 1}`}
                  className='mr-2 cursor-pointer'
                />
                <div className='flex items-center'>
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
              </div>
            )),
          ]}
        </div>
      </div>
    </div>
  );
};

export default Filters;
