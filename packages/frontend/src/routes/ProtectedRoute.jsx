import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth/authContext';
import { verify } from '../contexts/auth/actions';
import LoadingSpinner from '../components/LoadingSpinner';

const ProtectedRoute = ({ children }) => {
  const [isFirstInit, setIsFirstInit] = useState(false);
  const [{ isAuth }, dispatch] = useAuth();

  const verifyUser = async () => {
    await verify(dispatch);
  };

  useEffect(() => {
    if (!isFirstInit) {
      verifyUser().finally(() => setIsFirstInit(true));
    }
  }, [isFirstInit, setIsFirstInit]);

  if (isFirstInit) {
    return <>{isAuth ? <>{children}</> : <Navigate to='/login' replace />}</>;
  } else {
    return <LoadingSpinner />;
  }
};

export default ProtectedRoute;
