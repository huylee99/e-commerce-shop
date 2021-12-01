const cartService = require('../services/cart.service');

const add = async (req, res) => {
  const { product } = req.body;

  try {
    const { cart, message } = await cartService.addItem({
      uid: req.uid,
      product,
    });

    res.status(200).send({ cart, message: message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getCart = async (req, res) => {
  try {
    const cart = await cartService.getCart(req.uid);
    res.status(200).send({ cart });
  } catch (error) {
    res.status(400).send('error');
  }
};

const remove = async (req, res) => {
  const { product } = req.body;

  try {
    const { cart, message } = await cartService.removeItem({
      uid: req.uid,
      product,
    });

    res.status(200).send({ cart, message: message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const deleteItem = async (req, res) => {
  const { productId } = req.query;

  try {
    const { cart, message } = await cartService.deleteItem({
      uid: req.uid,
      productId,
    });

    res.status(200).send({ cart, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { add, getCart, remove, deleteItem };
