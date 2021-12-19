const { model, Schema, Types } = require('mongoose');

const wishListSchema = new Schema({
  uid: {
    type: Types.ObjectId,
    ref: 'user',
    required: true,
  },
  wishList: [
    {
      type: Types.ObjectId,
      ref: 'products',
      _id: false,
    },
  ],
});

wishListSchema.path('_id');

const WishList = model('wishlist', wishListSchema);

module.exports = { WishList };
