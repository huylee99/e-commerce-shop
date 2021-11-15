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
  rating: {
    type: Number,
  },
});

productSchema.path('_id');

const Product = model('products', productSchema);

module.exports = { Product };
