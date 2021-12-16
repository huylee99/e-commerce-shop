import { useState } from 'react';
import InputSelect from '@/components/Input/InputSelect';
import Modal from '@/components/Modal';
import EditForm from '../EditForm';
import Button from '../../../../components/Button';

import { useCheckout } from '../../context/checkoutContext';
import types from '../../context/types';

const initialValues = {
  address: '',
  fullName: '',
  phoneNumber: '',
  zipCode: '',
  state: '',
  city: '',
};

const Shipping = ({ userState }) => {
  const [index, setIndex] = useState(null);
  const [show, setShow] = useState(false);
  const { addresses } = userState;
  const [{ shippingInformation }, dispatch] = useCheckout();

  const handleClick = index => {
    setIndex(index);
    setShow(true);
  };

  const handleOnChange = data => {
    dispatch({
      type: types.SHIPPING_SELECT,
      shippingInformation: data,
    });
  };

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Choose shipping address</h2>
        <Button type='button' onClick={() => setShow(true)}>
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
              selectedId={shippingInformation && shippingInformation._id}
              onChange={() => handleOnChange({ ...rest })}
            >
              <div className='rounded-lg flex items-center'>
                <h4 className='font-bold mr-10 text-base uppercase'>
                  {rest.fullName}
                </h4>
                <span className='block text-sm text-gray-500 font-semibold'>
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
          <EditForm
            data={addresses[index] ? addresses[index] : initialValues}
            addressId={addresses[index] ? addresses[index]._id : null}
            setShow={setShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Shipping;
