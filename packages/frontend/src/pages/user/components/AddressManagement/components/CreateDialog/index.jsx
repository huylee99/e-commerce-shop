import { useState } from 'react';
import AddressForm from '../../../../../../components/AddressForm';
import Modal from '../../../../../../components/Modal';

const CreateDialog = () => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(true);
  };

  return (
    <>
      <button
        className='font-semibold text-white hover:text-blue-500 hover:bg-transparent px-4 py-1 bg-blue-500 rounded-md border-2 border-blue-500'
        onClick={handleClick}
      >
        Add address
      </button>
      {isShow ? (
        <Modal onClose={() => setIsShow(false)}>
          <AddressForm setShow={setIsShow} />
        </Modal>
      ) : null}
    </>
  );
};

export default CreateDialog;
