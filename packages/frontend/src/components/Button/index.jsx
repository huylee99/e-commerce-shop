import PropTypes from 'prop-types';
import LoadingSpinner from '../LoadingSpinner';

const Button = ({
  children,
  onClick,
  size,
  type = 'button',
  disabled = false,
  isLoading = false,
}) => {
  return (
    <div className='relative inline-flex justify-center items-center'>
      <button
        className={`${size} bg-blue-500 border relative border-blue-500 py-1 px-4 font-bold text-white cursor-pointer rounded-md hover:bg-transparent hover:text-blue-500 disabled:opacity-40 disabled:pointer-events-none`}
        onClick={onClick}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
      {isLoading ? (
        <div className='absolute'>
          <LoadingSpinner size={6} />
        </div>
      ) : null}
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

export default Button;
