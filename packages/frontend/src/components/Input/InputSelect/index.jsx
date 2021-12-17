import PropTypes from 'prop-types';

const InputSelect = ({
  children,
  name,
  id,
  selectedId,
  value,
  onChange,
  className,
}) => {
  return (
    <label htmlFor={id} className={`block cursor-pointer ${className}`}>
      <input
        type='radio'
        name={name}
        id={id}
        value={value}
        className='peer sr-only'
        onChange={onChange}
        checked={id === selectedId}
      />
      <div className='px-4 py-2 border-2 border-gray-200 rounded-md peer-checked:border-blue-600 transition-all'>
        {children}
      </div>
    </label>
  );
};

InputSelect.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  selectedId: PropTypes.string,
};

export default InputSelect;
