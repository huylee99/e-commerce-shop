const { User } = require('../database/models/user.model');
const { Cart } = require('../database/models/cart.model');
const authMessage = require('../core/constants/auth.constant');

const loginService = async (email, password) => {
  const isFound = await User.checkEmail(email);

  if (isFound) {
    const isMatched = await isFound.isPasswordMatched(password);

    if (!isMatched) {
      throw Error(authMessage.WRONG_PASSWORD);
    }

    const user = isFound.toJSON();
    const cart = await Cart.getCart(isFound._id);
    return { user, cart, message: authMessage.LOGIN_SUCCESSFULLY };
  }

  throw Error(authMessage.WRONG_EMAIL);
};

module.exports = { loginService };
