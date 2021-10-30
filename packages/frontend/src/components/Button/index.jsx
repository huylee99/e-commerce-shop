import PropTypes from 'prop-types';

const Button = ({ children, onClick, size }) => {
  const buttonSize = () => {
    switch (size) {
      case 'full':
        return 'w-full';
      default:
        return '';
    }
  };

  return (
    <button
      className={`bg-blue-500 border border-blue-500 py-1 px-4 font-bold text-white cursor-pointer rounded-md hover:bg-transparent hover:text-blue-500 ${buttonSize()}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
