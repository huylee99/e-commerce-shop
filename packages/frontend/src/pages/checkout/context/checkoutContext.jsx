import { createContext, useContext, useReducer } from 'react';
import checkoutReducer from './reducers';

const CheckoutContext = createContext();
CheckoutContext.displayName = 'CheckoutContext';

const initialState = {
  shippingAddressId: null,
  paymentMethod: null,
  items: [],
  totalPrice: 0,
};

const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  const value = [state, dispatch];

  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};

const useCheckout = () => {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw Error('Context is not valid!');
  }

  return context;
};

export { CheckoutProvider, useCheckout };
