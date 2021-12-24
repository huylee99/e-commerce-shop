import { useState } from 'react';
import { useEffect } from 'react';

import { deleteAddress } from '@/features/user/actions';
import Modal from '@/components/Modal';
import { addressInitialValues } from '@/constant/initialValues';

const DeleteDialog = ({ selectedAddress, setSelectedIndex }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [request, setRequest] = useState(false);

  const { fullName, address, zipCode, city, state, phoneNumber, _id } =
    selectedAddress || addressInitialValues;

  const handleDelete = () => {
    setRequest(true);
    setIsLoading(true);
  };

  useEffect(() => {
    if (request) {
      deleteAddress(_id)
        .then(() => setIsShow(false))
        .catch(() => setIsLoading(false));
    }

    return () => {
      setRequest(false);
      setIsLoading(false);
    };
  }, [request]);

  const handleClick = () => {
    setSelectedIndex();
    setIsShow(true);
  };
  return (
    <>
      <button
        className='font-semibold text-dark hover:text-primary'
        onClick={handleClick}
      >
        Remove
      </button>
      {isShow ? (
        <Modal onClose={() => setIsShow(false)}>
          <div className='p-4'>
            <h2 className='mb-4'>Are you sure to delete this address?</h2>
            <div className='w-full py-4 px-5 border border-gray-200 rounded-xl flex flex-col mb-5'>
              <h3 className='capitalize font-bold mb-2'>{fullName}</h3>
              <ul>
                <li>
                  <span className='text-sm font-semibold'>{address}</span>
                </li>
                <li>
                  <span className='text-sm font-semibold'>
                    {city}, {state} {zipCode}
                  </span>
                </li>
                <li>
                  <span className='text-sm font-semibold'>
                    Phone Number: {phoneNumber}
                  </span>
                </li>
              </ul>
            </div>
            <button
              onClick={handleDelete}
              disabled={isLoading}
              className='px-6 py-1 bg-blue-500 font-bold text-white mr-2 rounded-md'
            >
              Yes
            </button>
            <button
              onClick={() => setIsShow(false)}
              disabled={isLoading}
              className='px-6 py-1 bg-gray-100 text-dark font-bold rounded-md'
            >
              No
            </button>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default DeleteDialog;
