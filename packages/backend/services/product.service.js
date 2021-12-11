const { Product } = require('../database/models/product.model');
const commonMessage = require('../core/constants/common.constant');
const paginate = require('../core/helpers/paginate');

const createProduct = async data => {
  const product = new Product(data);

  try {
    await product.save();

    return { product, message: commonMessage.CREATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

const getAllProducts = async ({ skip = 0, limit = 12, ...rest }) => {
  try {
    const products = await Product.find({
      ...rest,
      price: { $lte: rest.price || 100 },
      rating: rest.rating || { $lte: 5 },
    })
      .skip(skip)
      .limit(limit);
    const totalItems = products.length;
    const { currentPage, totalPages } = paginate(totalItems, skip, limit);

    return {
      message: commonMessage.GET_SUCCESSFULLY,
      products,
      currentPage,
      totalItems,
      totalPages,
    };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

const getProductById = async id => {
  try {
    const product = await Product.findById(id);
    return { product, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

module.exports = { getAllProducts, createProduct, getProductById };
