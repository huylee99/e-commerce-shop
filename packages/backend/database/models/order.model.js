const { model, Types, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    uid: {
      type: Types.ObjectId,
      ref: 'user',
    },
    items: [
      {
        product: {
          type: Types.ObjectId,
          ref: 'products',
        },
        quantity: {
          type: Number,
        },
        price: {
          type: Number,
        },
        _id: false,
      },
    ],
    discount: {
      type: Number,
      required: true,
    },
    subTotal: {
      type: Number,
      default: 0,
    },
    shippingFee: {
      type: Number,
      default: 5,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    orderId: {
      type: String,
    },
    paymentMethod: {
      type: String,
    },
    shippingInformation: {
      phone: {
        type: String,
      },
      address: {
        type: String,
      },
      name: {
        type: String,
      },
      title: {
        type: String,
      },
    },
    status: {
      type: String,
    },
  },

  { timestamps: true }
);

orderSchema.path('_id');

const Order = model('order', orderSchema);

module.exports = { Order };
