const { model, Schema } = require('mongoose');

const discountSchema = new Schema(
  {
    discountValue: {
      type: Number,
      required: true,
    },
    discountCode: {
      type: String,
      required: true,
    },
    validFrom: {
      type: Date,
      required: true,
    },
    validTo: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

discountSchema.path('_id');

const Discount = model('discount', discountSchema);

module.exports = { Discount };
