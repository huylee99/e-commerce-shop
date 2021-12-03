const orderService = require('../services/order.service');
const cartService = require('../services/cart.service');
const { orderSuccessMail } = require('../core/utils/email');

const createOrder = async (req, res) => {
  try {
    const { order, email, message } = await orderService.createOrder(
      req.body,
      req.uid
    );
    await cartService.clearCart(req.uid);
    await orderSuccessMail(email, order);
    res.status(200).send({ order, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getOrder = async (req, res) => {
  const { orderId } = req.query;

  try {
    const { order, message } = await orderService.getOrder(orderId);

    res.status(200).send({ order, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { createOrder, getOrder };
