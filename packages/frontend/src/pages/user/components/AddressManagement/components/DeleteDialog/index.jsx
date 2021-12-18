import { useState } from 'react';
import { useEffect } from 'react';

import { deleteAddress } from '../../../../../../features/user/actions';
import Modal from '../../../../../../components/Modal';

const DeleteDialog = ({ selectedAddress, setSelectedIndex }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [request, setRequest] = useState(false);

  const { fullName, address, zipCode, city, state, phoneNumber, _id } =
    selectedAddress || {};

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
          <h2>Are you sure to delete this address?</h2>
          <div className='w-full py-4 px-5 border border-gray-200 rounded-xl flex flex-col'>
            <h3 className='capitalize font-bold mb-2'>{fullName}</h3>
            <ul className='mb-5'>
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
          <button onClick={handleDelete} disabled={isLoading}>
            Yes
          </button>
          <button onClick={() => setIsShow(false)} disabled={isLoading}>
            No
          </button>
        </Modal>
      ) : null}
    </>
  );
};

export default DeleteDialog;
