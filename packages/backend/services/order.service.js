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
      .populate({
        path: 'discount',
        populate: {
          path: 'discountId',
          model: 'discount',
          match: { isApplied: true },
        },
      })
      .select('-__v -uid -_id');

    if (!order) {
      throw Error(commonMessage.GET_FAILED);
    }

    return { order, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(error.message);
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

const getAllOrder = async (uid, page) => {
  const skip = (+page - 1) * 5;
  const limit = 5;
  try {
    const isFound = await Order.find({ uid })
      .select('createdAt orderId status')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip(skip);
    const itemsCount = await Order.find({ uid }).countDocuments();

    if (isFound) {
      const totalItems = itemsCount;
      const currentPage = +page;
      const totalPages = Math.ceil(totalItems / limit);

      return {
        data: { orders: isFound, totalItems, currentPage, totalPages },
        message: commonMessage.GET_SUCCESSFULLY,
      };
    }
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

module.exports = { createOrder, getOrder, checkOrder, getAllOrder };
