import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import Backdrop from '../Backdrop';

const modal = document.getElementById('modal');

const Modal = ({ children, onClose }) => {
  const elRef = useRef();

  if (!elRef.current) {
    elRef.current = document.createElement('div');
  }

  useEffect(() => {
    modal.appendChild(elRef.current);

    return () => modal.removeChild(elRef.current);
  }, []);

  return createPortal(
    <>
      <Backdrop onClose={onClose} />
      <div className='fixed top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-md shadow w-auto bg-white p-4'>
        {children}
      </div>
    </>,
    elRef.current
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
};

export default Modal;
