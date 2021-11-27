import types from './types';

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case types.SHIPPING_SELECT: {
      return {
        ...state,
        shippingAddressId: action.shippingAddressId,
      };
    }
    case types.PAYMENT_SELECT: {
      return {
        ...state,
        paymentMethod: action.paymentMethod,
      };
    }
    case types.CART_CONFIRM: {
      const { totalPrice, items } = action.data;
      return {
        ...state,
        items: items,
        totalPrice: totalPrice,
      };
    }
    default: {
      throw Error(`Action ${action.type} is not valid!`);
    }
  }
};

export default checkoutReducer;
