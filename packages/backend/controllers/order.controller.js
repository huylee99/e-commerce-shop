const orderService = require('../services/order.service');
const cartService = require('../services/cart.service');

const createOrder = async (req, res) => {
  try {
    const { order, message } = await orderService.createOrder(req.body);
    await cartService.clearCart(req.uid);
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
