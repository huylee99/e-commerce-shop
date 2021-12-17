import OrderItem from '../OrderItem';

const ProductTable = ({ data }) => {
  return (
    <>
      <div className='bg-gray-100 text-lg px-4 py-2 font-bold rounded-md text-dark'>
        Order Summary
      </div>
      <div className='py-4'>
        <table className='min-w-full divide-y divide-gray-200 mb-5'>
          <thead>
            <tr>
              <th
                scope='col'
                className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Product
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Quantity
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Unit
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Price
              </th>
              <th
                scope='col'
                className='px-6 py-2 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
              >
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {data &&
              data.items.map(({ product, price, quantity }) => (
                <OrderItem
                  key={product._id}
                  product={{
                    name: product.name,
                    price: price,
                    quantity: quantity,
                    unit: product.unit,
                  }}
                />
              ))}
          </tbody>
        </table>
        <div className='ml-auto w-1/3'>
          <div className='flex justify-between'>
            <span className='font-bold'>Subtotal: </span>
            <span>${data.subTotal}</span>
          </div>
          <div className='text-primary flex justify-between'>
            <span>Discount: </span>
            <span>${data.discount}</span>
          </div>
          <div className='text-primary flex justify-between'>
            <span>Shipping Fee: </span>
            <span>${data.shippingFee}</span>
          </div>
          <span className='font-bold flex justify-between text-lg'>
            <span>Total:</span>
            <span>${data.totalPrice}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductTable;
