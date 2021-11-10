import PropTypes from 'prop-types';

const SectionDivider = ({ children, size = 'lg' }) => {
  const sectionDividerPadding = size === 'lg' ? 'py-10' : 'py-5';

  return <div className={`${sectionDividerPadding}`}>{children}</div>;
};

SectionDivider.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.string,
};

export default SectionDivider;
