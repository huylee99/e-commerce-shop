import CartItem from '../CartItem';

const CartList = ({ cart }) => {
  return (
    <div className='mb-10 max-h-[600px]'>
      <div className='gap-4 max-h-[600px] list-scroll overflow-y-scroll border border-gray-200'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-100 sticky top-0'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Product
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Price
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Quantity
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Subtotal
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 min-h-[1px] max-h-[300px] overflow-y-scroll'>
            {cart && cart.cart.length !== 0
              ? cart.cart.map(({ product, quantity }) => (
                  <CartItem
                    key={product._id}
                    product={product}
                    quantity={quantity}
                  />
                ))
              : ''}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartList;
