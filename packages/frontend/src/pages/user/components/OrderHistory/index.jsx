import { useState, useEffect } from 'react';
import orderRequest from '../../../../api/orderAPI';
import responseMessage from '../../../../constant/responseMessage';
import { dateFormat } from '../../../../helpers/dateFormat';
import { useQuery } from '../../../../hooks/useQuery';

import Pagination from '../../../../components/Pagination';

const OrderHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  let [query, setQuery] = useQuery();

  if (!query) {
    query = { page: 1 };
  }

  const handleSetQuery = pageNum => {
    setQuery({ page: pageNum });
  };

  useEffect(() => {
    if (query.page) {
      fetchOrders();
    }
  }, [query.page]);

  const fetchOrders = async () => {
    setIsLoading(true);
    const response = await orderRequest.getAllOrders(query.page);
    const { data, message } = response.data;
    if (message === responseMessage.GET_SUCCESSFULLY) {
      setData(data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <h2 className='font-bold text-2xl mb-4'>Order History</h2>
      {isLoading ? (
        '...Loading'
      ) : data.orders && data.orders.length > 0 ? (
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
                  {data.orders.map(({ _id, status, orderId, createdAt }) => (
                    <tr key={_id}>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <a
                          href={`/tracking?id=${orderId}`}
                          target='_blank'
                          rel='noreferrer'
                          className='text-base font-medium text-gray-900 underline hover:text-blue-500 cursor-pointer'
                        >
                          {orderId}
                        </a>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='text-base font-medium text-gray-900'>
                          {dateFormat(createdAt)}
                        </span>
                      </td>
                      <td className='px-6 py-4 whitespace-nowrap'>
                        <span className='px-3 py-1 inline-flex text-sm leading-5 font-bold rounded-full bg-green-100 text-green-800'>
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='bg-white py-3 border-t border-gray-200 px-6 w-full'>
                <div className='flex items-center justify-between w-full'>
                  <p className='text-sm font-bold text-gray-500'>
                    {` Showing ${5 * (data.currentPage - 1) + 1} to
                      ${
                        data.currentPage * 5 > data.totalItems
                          ? data.totalItems
                          : data.currentPage * 5
                      }
                      of ${data.totalItems} results`}
                  </p>
                  {data.totalPages > 1 ? (
                    <Pagination
                      data={{
                        totalPages: data.totalPages,
                        currentPage: data.currentPage,
                      }}
                      setPage={handleSetQuery}
                    />
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No orders</div>
      )}
    </>
  );
};

export default OrderHistory;
