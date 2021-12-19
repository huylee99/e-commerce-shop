const orderService = require('../services/order.service');

const createOrder = async (req, res) => {
  try {
    const { orderId, message } = await orderService.createOrder(
      req.body,
      req.uid
    );

    res.status(200).send({ orderId, message });
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

const checkOrder = async (req, res) => {
  const { orderId } = req.query;

  try {
    const { order, message } = await orderService.checkOrder(orderId);
    res.status(200).send({ order, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getAllOrder = async (req, res) => {
  const { page } = req.query;
  try {
    const { data, message } = await orderService.getAllOrder(req.uid, page);

    res.status(200).send({ data, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { createOrder, getOrder, checkOrder, getAllOrder };
