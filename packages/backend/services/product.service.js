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

const getAllProducts = async ({ skip, offset }) => {
  try {
    const products = await Product.find().skip(skip).limit(offset);
    const totalItems = await Product.count();
    const { currentPage, totalPages } = paginate(totalItems, skip, offset);

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

const getProductsByCategory = async ({ skip, offset, category }) => {
  try {
    const products = await Product.getProductsByCategory({
      skip,
      offset,
      category,
    });
    const totalItems = products.length;
    const { currentPage, totalPages } = paginate(totalItems, skip, offset);

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

module.exports = { getAllProducts, createProduct, getProductsByCategory };
