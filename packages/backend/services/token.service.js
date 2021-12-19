const jwt = require('jsonwebtoken');
const { User } = require('../database/models/user.model');
const { Cart } = require('../database/models/cart.model');
const { Address } = require('../database/models/address.model');
const { WishList } = require('../database/models/wishlist.model');
const splitToken = require('../core/helpers/splitToken');
const authMessage = require('../core/constants/auth.constant');

const authTokenGenerator = userId => {
  const payload = {
    userId,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

const verifyToken = async authHeader => {
  try {
    if (!authHeader) {
      throw Error(authMessage.LOGIN_REQUIRED);
    }

    const token = splitToken(authHeader);
    const result = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: result.userId }).select('-__v');
    const cart = await Cart.getCart(result.userId);
    const addresses = await Address.find({ uid: result.userId }).select(
      '-uid -__v'
    );
    const wishList = await WishList.findOne({ uid: result.userId }).select(
      '-uid -__v'
    );

    return { cart, user, addresses, wishList };
  } catch (error) {
    throw Error(authMessage.TOKEN_NOT_VALID);
  }
};

module.exports = { authTokenGenerator, verifyToken };
