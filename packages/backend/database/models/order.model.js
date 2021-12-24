const { model, Types, Schema } = require('mongoose');

const orderSchema = new Schema(
  {
    uid: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
    },
    items: [
      {
        product: {
          type: Types.ObjectId,
          ref: 'products',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        _id: false,
      },
    ],
    discount: {
      isApplied: {
        type: Boolean,
        default: false,
      },
      appliedDiscount: {
        type: String,
        default: '',
      },
      amount: {
        type: Number,
        default: 0,
      },
    },
    subTotal: {
      type: Number,
      default: 0,
      required: true,
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
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
      default: 'paypal',
    },
    shippingInformation: {
      address: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
      fullName: {
        type: String,
        required: true,
      },
    },
    status: {
      type: String,
      required: true,
      default: 'PROCESSED',
    },
  },

  { timestamps: true }
);

orderSchema.path('_id');

const Order = model('order', orderSchema);

module.exports = { Order };
