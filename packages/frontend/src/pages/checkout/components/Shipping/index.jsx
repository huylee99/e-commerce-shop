import { useState } from 'react';
import InputSelect from '@/components/Input/InputSelect';
import Modal from '@/components/Modal';
import EditForm from '../EditForm';

const ADDRESSES = [
  {
    id: 1,
    title: 'HOME',
    name: 'Huy',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97224',
    phone: '5039295113',
  },
  {
    id: 2,
    title: 'HOME-1',
    name: 'Huy',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97223',
    phone: '5039295113',
  },
  {
    id: 3,
    title: 'HOME-2',
    name: 'Huy',
    address: '16190 SW 108th AVE APT 210, Tigard, OR 97222',
    phone: '5039295113',
  },
];

const Shipping = () => {
  const [address, setAddress] = useState({ id: '', title: '', address: '' });
  const [show, setShow] = useState(false);

  // const handleChange = event => {
  //   console.log(event.target.value);
  // };

  const clickHandler = index => {
    setAddress(ADDRESSES[index]);
    setShow(true);
  };

  return (
    <div>
      <h2 className='font-bold text-2xl mb-4'>Choose shipping address</h2>
      <div>
        {ADDRESSES.map((user, index) => (
          <InputSelect
            key={user.id}
            name='address'
            id={`address-${user.id}`}
            value={index}
            className='mb-2 last:mb-0'
          >
            <div className='rounded-lg flex items-center justify-between'>
              <h4 className='font-bold text-base uppercase'>{user.title}</h4>
              <span className='block text-sm text-gray-500 font-semibold'>
                {user.address}
              </span>
              <span
                className='text-blue-600 font-medium hover:text-gray-500'
                onClick={() => clickHandler(index)}
              >
                Edit
              </span>
            </div>
          </InputSelect>
        ))}
      </div>
      {show ? (
        <Modal onClose={() => setShow(false)}>
          <EditForm address={address} />
        </Modal>
      ) : null}
    </div>
  );
};

export default Shipping;
