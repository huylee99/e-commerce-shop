const { model, Schema, Types } = require('mongoose');

const cartSchema = new Schema({
  uid: {
    type: Types.ObjectId,
    ref: 'user',
    required: true,
  },
  cart: [
    {
      product: {
        type: Types.ObjectId,
        ref: 'products',
      },
      quantity: {
        type: Number,
        default: 1,
      },
      _id: false,
    },
  ],
});

cartSchema.path('_id');

cartSchema.statics.addItem = async function ({ uid, product }) {
  const carts = this;
  const userCart = await carts.findOne({ uid });

  const productExisted = userCart.cart.find(
    item => product.id === item.product.toString()
  );

  if (productExisted) {
    productExisted.quantity += product.quantity;
  } else {
    userCart.cart.push({
      product: Types.ObjectId(product.id),
      quantity: product.quantity,
    });
  }

  await userCart.save();

  return await userCart.populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'products',
    },
  });
};

cartSchema.statics.removeItem = async function ({ uid, product }) {
  const carts = this;
  const userCart = await carts.findOne({ uid });

  const productExisted = userCart.cart.find(
    item => product.id === item.product.toString()
  );

  if (productExisted.quantity === 1) {
    userCart.cart = userCart.cart.filter(
      item => product.id !== item.product.toString()
    );
  } else {
    productExisted.quantity = product.quantity;
  }

  await userCart.save();

  return await userCart.populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'products',
    },
  });
};

cartSchema.methods.deleteItem = async function (id) {
  const userCart = this;

  userCart.cart = userCart.cart.filter(item => item.product.toString() !== id);

  await userCart.save();

  return await userCart.populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'products',
    },
  });
};

cartSchema.statics.getCart = async function (uid) {
  const carts = this;
  const cart = await carts.findOne({ uid }).populate({
    path: 'cart',
    populate: {
      path: 'product',
      model: 'products',
    },
  });

  return cart;
};

const Cart = model('cart', cartSchema);

module.exports = { Cart };
