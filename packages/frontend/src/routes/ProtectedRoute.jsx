import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { verify } from '../features/user/actions';
import authService from '../services/authServices';
import LoadingSpinner from '../components/LoadingSpinner';

const ProtectedRoute = ({ children, isPrivate }) => {
  const [isFirstInit, setIsFirstInit] = useState(false);
  const token = authService.getToken('accessToken');
  const auth = useSelector(state => state.auth.isAuth);

  const verifyUser = async () => {
    await verify();
  };

  useEffect(() => {
    if (!auth && !isFirstInit && token) {
      verifyUser().finally(() => setIsFirstInit(true));
    } else {
      setIsFirstInit(true);
    }
  }, [isFirstInit, setIsFirstInit, auth, token]);

  if (!isPrivate && isFirstInit) {
    return <>{children}</>;
  } else if (isPrivate && isFirstInit) {
    return <>{auth ? <>{children}</> : <Navigate to='/login' replace />}</>;
  } else {
    return <LoadingSpinner />;
  }
};

export default ProtectedRoute;
