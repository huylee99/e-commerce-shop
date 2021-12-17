const { Order } = require('../database/models/order.model');
const commonMessage = require('../core/constants/common.constant');
const { orderSuccessMail } = require('../core/utils/email');
const cartService = require('../services/cart.service');

const createOrder = async ({ email, ...rest }, uid) => {
  try {
    const newOrder = new Order({ ...rest, uid });
    newOrder.orderId = Math.random().toString(32).slice(2).toUpperCase();
    await newOrder.save();
    await cartService.clearCart(uid);
    await orderSuccessMail(email, newOrder.orderId);

    return {
      orderId: newOrder.orderId,
      message: commonMessage.CREATE_SUCCESSFULLY,
    };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

const getOrder = async orderId => {
  try {
    const order = await Order.findOne({ orderId: orderId })
      .populate({
        path: 'items',
        populate: {
          path: 'product',
          model: 'products',
          select:
            '-desc -categories -rating -sold -tags -price -oldPrice -discount -images -__v',
        },
      })
      .select('-__v -uid -_id');

    return { order, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

const checkOrder = async orderId => {
  try {
    const isFound = await Order.findOne({ orderId });

    if (isFound) {
      return { order: true, message: commonMessage.GET_SUCCESSFULLY };
    }
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

module.exports = { createOrder, getOrder, checkOrder };
