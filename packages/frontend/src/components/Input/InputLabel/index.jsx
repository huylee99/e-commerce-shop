import PropTypes from 'prop-types';

const InputLabel = ({ title, htmlFor }) => {
  return (
    <label
      htmlFor={htmlFor}
      className='inline-block mb-2 font-semibold text-gray-500'
    >
      {title}
    </label>
  );
};

InputLabel.propTypes = {
  title: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default InputLabel;
