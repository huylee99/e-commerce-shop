import PropTypes from 'prop-types';

const Container = ({ children, size }) => {
  let containerSize = size;

  switch (containerSize) {
    case 'lg':
      containerSize = 'max-w-[1732px]';
      break;
    case 'md':
      containerSize = 'max-w-[1132px]';
      break;
    default:
      containerSize = 'max-w-[932px]';
      break;
  }

  return <div className={`${containerSize} px-2 mx-auto`}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.element.isRequired,
  size: PropTypes.string.isRequired,
};

export default Container;
