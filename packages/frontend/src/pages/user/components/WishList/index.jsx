import { useEffect, useState } from 'react';
import wishListAPI from '../../../../api/wishListAPI';
import { increaseQty } from '../../../../features/cart/actions';
import { deleteFromWishList } from '../../../../features/wishlist/actions';

const WishList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchWishList();
  }, []);

  const fetchWishList = async () => {
    setIsLoading(true);
    try {
      const response = await wishListAPI.getWishList();
      const { wishList } = response.data;
      setProducts(wishList.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = id => {
    increaseQty({ id, quantity: 1 });
  };

  const handleDelete = id => {
    deleteFromWishList(id).then(response => {
      setProducts(prev =>
        prev.filter(product => product._id !== response.data.productId)
      );
    });
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-bold text-2xl'>Wish List</h2>
      </div>
      <div className='flex gap-5 items-stretch flex-wrap'>
        {isLoading
          ? 'loading...'
          : products.length > 0
          ? products.map(item => (
              <div
                key={item._id}
                className='w-[calc(25%-15px)] py-4 px-5 border border-gray-200 rounded-xl flex flex-col'
              >
                <h3 className='capitalize font-bold text-xl mb-2'>
                  {item.name}
                </h3>
                <div className='w-full mb-2'>
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className='object-cover'
                  />
                </div>
                <span className='font-semibold text-lg inline-block mb-2'>
                  ${item.price}
                </span>
                <div className='mt-auto flex items-center'>
                  <button
                    className='bg-primary px-2 py-1 font-semibold text-white text-sm rounded-md hover:bg-green-700'
                    onClick={() => handleClick(item._id)}
                  >
                    Add To Cart
                  </button>
                  <div className='bg-gray-400 h-5 w-[1px] mx-4'></div>
                  <button
                    className='bg-gray-200 px-2 py-1 font-semibold text-sm rounded-md hover:bg-gray-300'
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          : 'No Products'}
      </div>
    </div>
  );
};

export default WishList;
