const orderService = require('../services/order.service');

const createOrder = async (req, res) => {
  try {
    const { order, message } = await orderService.createOrder(req.body);

    res.status(200).send({ order, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { createOrder };
