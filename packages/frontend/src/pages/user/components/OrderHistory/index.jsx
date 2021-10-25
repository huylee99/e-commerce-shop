const OrderHistory = () => {
  return (
    <>
      <h2 className='font-bold text-2xl mb-4'>Order History</h2>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-100'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                  >
                    Order ID
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider'
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                <tr>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-base font-medium text-gray-900 underline hover:text-blue-500 cursor-pointer'>
                      1234
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <div className='text-base font-medium text-gray-900'>
                      10-24-2021
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    <span className='px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full bg-green-100 text-green-800'>
                      Delivered
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='bg-white py-3 border-t border-gray-200 px-6 w-full'>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <p className='text-sm font-bold text-gray-500'>
                    Showing 1 to 1 of 1 results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
