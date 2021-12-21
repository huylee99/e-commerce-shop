const { User } = require('../database/models/user.model');
const { Cart } = require('../database/models/cart.model');
const { Address } = require('../database/models/address.model');
const { WishList } = require('../database/models/wishlist.model');
const authMessage = require('../core/constants/auth.constant');

const loginService = async (email, password) => {
  const isFound = await User.checkEmail(email);

  if (isFound) {
    const isMatched = await isFound.isPasswordMatched(password);

    if (!isMatched) {
      throw Error(authMessage.WRONG_PASSWORD);
    }

    const cart = await Cart.getCart(isFound._id);
    const addresses = await Address.find({ uid: isFound._id }).select('-uid');
    const wishList = await WishList.findOne({ uid: isFound._id }).select(
      '-uid -__v'
    );
    return {
      user: isFound,
      cart,
      addresses,
      wishList,
      message: authMessage.LOGIN_SUCCESSFULLY,
    };
  }

  throw Error(authMessage.WRONG_EMAIL);
};

module.exports = { loginService };
