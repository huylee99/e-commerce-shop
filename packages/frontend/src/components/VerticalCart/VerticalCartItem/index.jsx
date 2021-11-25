import { MinusIcon, PlusIcon } from '@heroicons/react/solid';

const VerticalCartItem = ({ product, quantity }) => {
  const { price, name, images } = product;

  return (
    <>
      <div className='flex items-center flex-none min-h-[100px] py-4'>
        <div className='max-w-[60%] flex'>
          <div className='w-[90px] mr-4 flex-none border rounded-md'>
            <img src={images[0]} alt={name} className='w-full' />
          </div>
          <div className='flex flex-col'>
            <div>
              <h3 className='text-lg font-bold'>{name}</h3>
              <h4 className='text-gray-500 text-sm'>Price: ${price}</h4>
              <h4 className='text-gray-500 text-sm'>Qty: {quantity}</h4>
            </div>

            <h4 className='font-bold mt-top'>
              Total: ${parseFloat(price * quantity).toFixed(2)}
            </h4>
          </div>
        </div>
        <div className='max-w-[40%] flex-none ml-auto'>
          <div className='flex flex-col h-full'>
            <div className='mt-auto'>
              <div className='inline-flex flex-col items-center mt-auto'>
                <PlusIcon className='w-5 border border-gray-400 text-gray-500 cursor-pointer' />
                <input
                  type='number'
                  className='text-center my-1 focus:outline-none w-5 font-bold'
                  defaultValue='1'
                />

                <MinusIcon className='w-5 border border-gray-400  text-gray-500 cursor-pointer' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerticalCartItem;
