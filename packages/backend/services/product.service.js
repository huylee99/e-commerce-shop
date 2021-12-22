const { Product } = require('../database/models/product.model');
const commonMessage = require('../core/constants/common.constant');
const paginate = require('../core/helpers/paginate');

const createProduct = async data => {
  const { name } = data;
  const nameSlug = name.toLowerCase().split(' ').join('-');
  const code = Math.random().toString(16).slice(-6);
  const productSlug = `${nameSlug}-${code}`;

  const product = new Product({
    ...data,
    slug: {
      code,
      url: productSlug,
    },
  });

  try {
    await product.save();

    return { product, message: commonMessage.CREATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

const getAllProducts = async ({ page = 1, limit = 12, ...rest }) => {
  const skip = (+page - 1) * limit;

  const products = await Product.find({
    ...rest,
    price: { $lte: rest.price || 100 },
    rating: rest.rating || { $lte: 5 },
  })
    .skip(skip)
    .limit(+limit);

  const totalItems = await Product.countDocuments();
  const { currentPage, totalPages } = paginate(totalItems, skip, limit);

  if (products) {
    return {
      message: commonMessage.GET_SUCCESSFULLY,
      products,
      currentPage,
      totalItems,
      totalPages,
    };
  }

  throw Error(commonMessage.GET_FAILED);
};

const getProductByCode = async code => {
  try {
    const product = await Product.findOne({ 'slug.code': code });
    return { product, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

module.exports = { getAllProducts, createProduct, getProductByCode };
