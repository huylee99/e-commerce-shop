const { User } = require('../database/models/user.model');
const authMessage = require('../core/constants/auth.constant');

const loginService = async (email, password) => {
  const user = await User.checkEmail(email);

  if (user) {
    const isMatched = await user.isPasswordMatched(password);

    if (!isMatched) {
      throw Error(authMessage.WRONG_PASSWORD);
    }

    const result = user.toJSON();
    return { result, message: authMessage.LOGIN_SUCCESSFULLY };
  }

  throw Error(authMessage.WRONG_EMAIL);
};

module.exports = { loginService };
