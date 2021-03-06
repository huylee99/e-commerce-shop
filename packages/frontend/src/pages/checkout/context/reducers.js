import types from './types';

const checkoutReducer = (state, action) => {
  switch (action.type) {
    case types.SHIPPING_SELECT: {
      const { shippingInformation, selectedAddress } = action.payload;
      return {
        ...state,
        shippingInformation,
        selectedAddress,
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
