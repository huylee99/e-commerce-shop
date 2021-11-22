const jwt = require('jsonwebtoken');
const { User } = require('../database/models/user.model');
const { Cart } = require('../database/models/cart.model');
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
    const user = await User.findOne({ _id: result.userId });
    const cart = await Cart.getCart(result.userId);

    return { cart, user };
  } catch (error) {
    throw Error(authMessage.TOKEN_NOT_VALID);
  }
};

module.exports = { authTokenGenerator, verifyToken };
