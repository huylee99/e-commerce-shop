const productService = require('../services/product.service');

const getAll = async (req, res) => {
  try {
    const queries = req.query;
    const result = await productService.getAllProducts({
      ...queries,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);

    res.status(200).send(product);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.query;
  try {
    const { product, message } = await productService.getProductById(id);

    res.status(200).send({ product, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { getAll, createProduct, getProductById };
