import { useState } from 'react';

const ProductImgs = ({ imgs, name }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = index => {
    if (index === selectedIndex) {
      return;
    }
    setSelectedIndex(index);
  };

  return (
    <>
      {imgs.length > 0 ? (
        <div className='flex flex-col w-[100px] gap-2'>
          {imgs.map((image, index) => (
            <button
              key={index}
              className={`${
                selectedIndex === index ? 'border-primary' : 'border-gray-200'
              } border rounded-md overflow-hidden hover:cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              <img src={image} alt={`${name}-${index + 1}`} />
            </button>
          ))}
        </div>
      ) : null}

      <div className='w-[600px] max-h-[600px] rounded-lg overflow-hidden border border-gray-200'>
        <img
          src={imgs[selectedIndex]}
          alt='water'
          className='h-full w-full object-cover'
        />
      </div>
    </>
  );
};

export default ProductImgs;
