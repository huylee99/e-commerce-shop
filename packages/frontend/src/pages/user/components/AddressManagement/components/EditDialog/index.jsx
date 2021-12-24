import { useState } from 'react';
import AddressForm from '@/components/AddressForm';
import Modal from '@/components/Modal';
import { addressInitialValues } from '@/constant/initialValues';

const EditDialog = ({ selectedAddress, setSelectedIndex }) => {
  const [isShow, setIsShow] = useState(false);
  const data = selectedAddress || addressInitialValues;

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
        Edit
      </button>
      {isShow ? (
        <Modal onClose={() => setIsShow(false)}>
          <AddressForm data={data} setShow={setIsShow} />
        </Modal>
      ) : null}
    </>
  );
};

export default EditDialog;
