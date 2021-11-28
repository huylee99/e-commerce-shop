const { Order } = require('../database/models/order.model');
const commonMessage = require('../core/constants/common.constant');

const createOrder = async data => {
  try {
    const order = new Order(data);
    await order.save();

    return { order, message: commonMessage.CREATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

module.exports = { createOrder };
