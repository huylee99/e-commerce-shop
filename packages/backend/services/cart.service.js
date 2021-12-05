const { Cart } = require('../database/models/cart.model');
const commonMessage = require('../core/constants/common.constant');

const addItem = async ({ uid, product }) => {
  try {
    const cartIsFound = await Cart.findOne({ uid });

    if (!cartIsFound) {
      const newCart = new Cart({
        uid,
        cart: [{ product: product.id, quantity: product.quantity }],
      });

      await newCart.save();

      const cart = await Cart.getCart(uid);
      return { cart, message: commonMessage.CREATE_SUCCESSFULLY };
    } else {
      const cart = await Cart.addItem({ uid, product });
      return { cart, message: commonMessage.UPDATE_SUCCESSFULLY };
    }
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

const removeItem = async ({ uid, product }) => {
  try {
    const { cart } = await Cart.removeItem({ uid, product });
    return { cart, message: commonMessage.UPDATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

const getCart = async uid => {
  try {
    const cart = await Cart.getCart(uid);
    return cart;
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

const deleteItem = async ({ uid, productId }) => {
  try {
    const isFound = await Cart.findOne({ uid });
    const cart = await isFound.deleteItem(productId);

    return { cart, message: commonMessage.UPDATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

const clearCart = async uid => {
  try {
    await Cart.deleteOne({ uid });

    return { message: commonMessage.UPDATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

module.exports = { deleteItem, removeItem, addItem, getCart, clearCart };
