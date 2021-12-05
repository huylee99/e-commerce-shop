const { Order } = require('../database/models/order.model');
const { User } = require('../database/models/user.model');
const commonMessage = require('../core/constants/common.constant');

const createOrder = async (data, uid) => {
  try {
    const newOrder = new Order(data);
    newOrder.orderId = `SM${new Date().getTime()}`;
    const user = await User.findById(uid);
    await newOrder.save();

    return {
      order: newOrder.orderId,
      email: user.email,
      message: commonMessage.CREATE_SUCCESSFULLY,
    };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

const getOrder = async orderId => {
  try {
    const order = await Order.findOne({ orderId: orderId }).populate({
      path: 'items',
      populate: {
        path: 'product',
        model: 'products',
      },
    });

    return { order, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

const checkOrder = async orderId => {
  try {
    const order = await Order.findOne({ orderId: orderId });

    return { order, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

module.exports = { createOrder, getOrder, checkOrder };
