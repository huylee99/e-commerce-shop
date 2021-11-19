import { createContext, useContext, useReducer } from 'react';
import authReducer from './reducers';

const AuthContext = createContext();
AuthContext.displayName = 'AuthContext';

const initialState = {
  isAuth: false,
  isLoading: false,
  user: null,
  error: null,
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const value = [state, dispatch];

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Context is not valid!');
  }

  return context;
};

export { AuthProvider, useAuth };
