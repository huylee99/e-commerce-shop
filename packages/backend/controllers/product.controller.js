const productService = require('../services/product.service');

const getAll = async (req, res) => {
  try {
    const queries = req.query;
    const result = await productService.getAllProducts({
      ...queries,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(200).send({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);

    res.status(200).send(product);
  } catch (error) {
    res.status(200).send({ message: error.message });
  }
};

module.exports = { getAll, createProduct };
