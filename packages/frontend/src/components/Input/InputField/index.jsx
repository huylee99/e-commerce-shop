import PropTypes from 'prop-types';

const InputField = ({ type = 'text', name, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      className='px-2 py-1 block focus:outline-none border border-gray-300 rounded-md font-semibold w-full'
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default InputField;
