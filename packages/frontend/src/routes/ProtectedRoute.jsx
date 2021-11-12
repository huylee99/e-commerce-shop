import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import authService from '../services/authServices';

const ProtectedRoute = ({ children }) => {
  const token = authService.getToken();

  return <>{token ? children : <Navigate to='/login' replace />}</>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.any,
};

export default ProtectedRoute;
