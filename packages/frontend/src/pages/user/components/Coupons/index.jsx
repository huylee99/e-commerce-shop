import { useEffect, useState } from 'react';
import discountRequest from '@/api/discountAPI';
import { TagIcon } from '@heroicons/react/outline';

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    discountRequest
      .getDiscount()
      .then(response => setCoupons(response.data.codes))
      .finally(setIsLoading(false));
  }, []);

  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Coupons</h2>
      <div className='flex gap-5'>
        {!isLoading
          ? coupons.length > 0
            ? coupons.map(coupon => (
                <div
                  key={coupon._id}
                  className='w-[calc(33.33%-13.33px)] py-4 px-5 border-2 border-gray-200 border-dashed rounded-xl'
                >
                  <h3 className='capitalize font-bold text-xl mb-2'>
                    Save {coupon.discountValue}% on your order
                  </h3>
                  <p className='text-sm font-medium text-gray-500 mb-4'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Repudiandae iure iusto molestiae voluptatem rem adipisci.
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='inline-flex items-center font-bold text-sm px-4 py-2 rounded-md bg-gray-100 leading-none'>
                      <TagIcon className='w-5 mr-2' />
                      {coupon.discountCode}
                    </span>
                  </div>
                </div>
              ))
            : 'No coupons available'
          : 'Loading...'}
      </div>
    </div>
  );
};

export default Coupons;
