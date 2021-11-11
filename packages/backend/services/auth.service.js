const { User } = require('../database/models/user.model');
const authMessage = require('../core/constants/auth.constant');
const toJSON = require('../core/helpers/toJSON');

const loginService = async (email, password) => {
  const user = await User.checkEmail(email);

  if (user) {
    const isMatched = await user.isPasswordMatched(password);

    if (!isMatched) {
      throw Error(authMessage.WRONG_PASSWORD);
    }

    const result = toJSON(user);
    delete result.password;

    return result;
  }

  throw Error(authMessage.WRONG_EMAIL);
};

module.exports = { loginService };
