import PropTypes from 'prop-types';

const SectionHeader = ({ title }) => {
  return (
    <h2 className='text-center text-5xl font-bold text-dark mb-10 capitalize'>
      {title}
    </h2>
  );
};

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionHeader;
