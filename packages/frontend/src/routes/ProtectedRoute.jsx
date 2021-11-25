import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { verify } from '../features/auth/actions';
import LoadingSpinner from '../components/LoadingSpinner';

const ProtectedRoute = ({ children, isPrivate }) => {
  const [isFirstInit, setIsFirstInit] = useState(false);
  const auth = useSelector(state => state.auth.isAuth);

  const verifyUser = async () => {
    await verify();
  };

  useEffect(() => {
    if (!isFirstInit) {
      if (!auth) {
        verifyUser().finally(() => setIsFirstInit(true));
      } else {
        setIsFirstInit(true);
      }
    }
  }, [isFirstInit, setIsFirstInit, auth]);

  if (!isPrivate && isFirstInit) {
    return <>{children}</>;
  } else if (isPrivate && isFirstInit) {
    return <>{auth ? <>{children}</> : <Navigate to='/login' replace />}</>;
  } else {
    return <LoadingSpinner />;
  }
};

export default ProtectedRoute;
