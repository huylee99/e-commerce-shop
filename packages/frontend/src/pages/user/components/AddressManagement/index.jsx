import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeleteDialog from './components/DeleteDialog';
import EditDialog from './components/EditDialog';
import CreateDialog from './components/CreateDialog';

const AddressManagement = () => {
  const { addresses } = useSelector(state => state.auth.user);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='font-bold text-2xl'>Manage Addresses</h2>
        <CreateDialog />
      </div>

      {addresses && addresses.length > 0 ? (
        <div className='flex gap-5 items-stretch flex-wrap'>
          {addresses.map(
            (
              { _id, fullName, address, city, state, zipCode, phoneNumber },
              index
            ) => (
              <div
                key={_id}
                className='w-[calc(33.33%-13.33px)] py-4 px-5 border border-gray-200 rounded-xl flex flex-col'
              >
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
                <div className='mt-auto flex items-center'>
                  <EditDialog
                    setSelectedIndex={() => setSelectedIndex(index)}
                    selectedAddress={addresses[selectedIndex]}
                  />
                  <div className='bg-gray-400 h-5 w-[1px] mx-4'></div>
                  <DeleteDialog
                    setSelectedIndex={() => setSelectedIndex(index)}
                    selectedAddress={addresses[selectedIndex]}
                  />
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <div>No address</div>
      )}
    </div>
  );
};

export default AddressManagement;
