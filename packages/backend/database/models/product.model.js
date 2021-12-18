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
  oldPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  discount: {
    type: Number,
    default: 0,
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
  rating: {
    type: Number,
    default: 0,
  },
  sold: {
    type: Number,
    default: 0,
  },
  unit: {
    type: String,
    required: true,
  },
  slug: {
    code: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

productSchema.path('_id');

const Product = model('products', productSchema);

module.exports = { Product };
