const { model, Schema } = require('mongoose');

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  categories: [
    {
      type: String,
      required: true,
    },
  ],
  images: [
    {
      type: String,
      required: true,
    },
  ],
  tags: [{ type: String }],
});

productSchema.path('_id');

productSchema.statics.getProductsByCategory = async function ({
  skip,
  offset,
  category,
}) {
  const products = this;

  const result = await products
    .find({ categories: category })
    .skip(skip)
    .limit(offset);

  return result;
};

const Product = model('products', productSchema);

module.exports = { Product };
