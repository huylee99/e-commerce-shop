import login from './types';

const authReducer = (state, action) => {
  switch (action.type) {
    case login.PENDING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case login.RESOLVED: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        user: action.user,
        error: null,
      };
    }
    case login.REJECTED: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    default: {
      throw Error(`Action ${action.type} is not valid!`);
    }
  }
};

export default authReducer;
