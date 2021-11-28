import { useState } from 'react';
import InputSelect from '@/components/Input/InputSelect';
import Modal from '@/components/Modal';
import EditForm from '../EditForm';

import { useCheckout } from '../../context/checkoutContext';
import types from '../../context/types';

const Shipping = ({ userState }) => {
  const { addressList, _id } = userState;
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
      <h2 className='font-bold text-2xl mb-4'>Choose shipping address</h2>
      <div>
        {addressList && addressList.length > 0
          ? addressList.map(({ _id, data }, index) => (
              <InputSelect
                key={_id}
                name='address'
                id={_id}
                value={index}
                className='mb-2 last:mb-0'
                selectedId={shippingInformation.id}
                onChange={() => onChangeHandler(_id, data)}
              >
                <div className='rounded-lg flex items-center justify-between'>
                  <h4 className='font-bold text-base uppercase'>
                    {data.title}
                  </h4>
                  <span className='block text-sm text-gray-500 font-semibold'>
                    {data.address}
                  </span>
                  <span
                    className='text-blue-600 font-medium hover:text-gray-500'
                    onClick={() => clickHandler(index)}
                  >
                    Edit
                  </span>
                </div>
              </InputSelect>
            ))
          : 'No address'}
      </div>
      {show ? (
        <Modal onClose={() => setShow(false)}>
          <EditForm
            address={addressList[index].data}
            idList={{ uid: _id, addressId: addressList[index]._id }}
            setShow={setShow}
          />
        </Modal>
      ) : null}
    </div>
  );
};

export default Shipping;
