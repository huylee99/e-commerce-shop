import { useState } from 'react';
import InputSelect from '@/components/Input/InputSelect';
import Modal from '@/components/Modal';
import AddressForm from '@/components/AddressForm';
import Button from '@/components/Button';

import { useCheckout } from '../../context/checkoutContext';
import types from '../../context/types';

import { addressInitialValues } from '@/constant/initialValues';

const Shipping = ({ userState }) => {
  const [index, setIndex] = useState(null);
  const [show, setShow] = useState(false);
  const { addresses } = userState;
  const [{ selectedAddress }, dispatch] = useCheckout();

  const handleClick = (index = null) => {
    setShow(true);
    setIndex(index);
  };

  const handleOnChange = data => {
    const { _id, ...rest } = data;
    dispatch({
      type: types.SHIPPING_SELECT,
      payload: {
        shippingInformation: rest,
        selectedAddress: _id,
      },
    });
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Choose shipping address</h2>
        <Button type='button' onClick={handleClick}>
          Add an address
        </Button>
      </div>

      {addresses && addresses.length > 0 ? (
        <div className='mt-4'>
          {addresses.map(({ _id, ...rest }, index) => (
            <InputSelect
              key={_id}
              name='address'
              id={_id}
              value={index}
              className='mb-2 last:mb-0'
              selectedId={selectedAddress}
              onChange={() => handleOnChange({ _id, ...rest })}
            >
              <div className='rounded-lg flex items-center'>
                <h4 className='font-bold mr-10 text-base uppercase'>
                  {rest.fullName}
                </h4>
                <span className='block max-w-[60%] truncate text-sm text-gray-500 font-semibold'>
                  {`${rest.address}, ${rest.city}, ${rest.state} ${rest.zipCode}`}
                </span>
                <button
                  type='button'
                  className='text-blue-600 font-medium hover:text-gray-500 ml-auto'
                  onClick={() => handleClick(index)}
                >
                  Edit
                </button>
              </div>
            </InputSelect>
          ))}
        </div>
      ) : null}

      {show ? (
        <Modal onClose={() => setShow(false)}>
          <AddressForm
            data={addresses[index] ? addresses[index] : addressInitialValues}
            setShow={setShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Shipping;
