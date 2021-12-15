import { useState } from 'react';
import InputSelect from '@/components/Input/InputSelect';
import Modal from '@/components/Modal';
import EditForm from '../EditForm';
import Button from '../../../../components/Button';

import { useCheckout } from '../../context/checkoutContext';
import types from '../../context/types';

const Shipping = ({ userState }) => {
  const { addressList } = userState;
  const [index, setIndex] = useState(null);
  const [show, setShow] = useState(false);
  const [{ shippingInformation }, dispatch] = useCheckout();

  const clickHandler = index => {
    setIndex(index);
    setShow(true);
  };

  const onChangeHandler = (_id, data) => {
    dispatch({
      type: types.SHIPPING_SELECT,
      shippingInformation: {
        id: _id,
        data: data,
      },
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

      {addressList && addressList.length > 0 ? (
        <div className='mt-4'>
          {addressList.map(({ _id, data }, index) => (
            <InputSelect
              key={_id}
              name='address'
              id={_id}
              value={index}
              className='mb-2 last:mb-0'
              selectedId={shippingInformation.id}
              onChange={() => onChangeHandler(_id, data)}
            >
              <div className='rounded-lg flex items-center'>
                <h4 className='font-bold mr-10 text-base uppercase'>
                  {data.fullName}
                </h4>
                <span className='block text-sm text-gray-500 font-semibold'>
                  {data.address}
                </span>
                <button
                  type='button'
                  className='text-blue-600 font-medium hover:text-gray-500 ml-auto'
                  onClick={() => clickHandler(index)}
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
            data={
              addressList[index]
                ? addressList[index].data
                : { address: '', fullName: '', phone: '' }
            }
            addressId={addressList[index] ? addressList[index]._id : null}
            setShow={setShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Shipping;
