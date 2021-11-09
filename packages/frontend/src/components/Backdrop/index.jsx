import PropTypes from 'prop-types';

const Backdrop = ({ onClose }) => {
  return (
    <div>
      <div
        className='fixed inset-0 bg-gray-400 bg-opacity-50 z-40 cursor-pointer'
        onClick={onClose}
      ></div>
    </div>
  );
};

Backdrop.propTypes = {
  onClose: PropTypes.func,
};

export default Backdrop;
