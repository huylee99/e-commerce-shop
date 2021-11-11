const { User } = require('../database/models/user.model');
const userMessage = require('../core/constants/user.constant');
const toJSON = require('../core/helpers/toJSON');

const createUser = async data => {
  const isEmailUsed = await User.checkEmail(data.email);

  if (!isEmailUsed) {
    const user = new User(data);
    await user.save();

    const result = toJSON(user);
    delete result.password;

    return result;
  } else {
    throw Error(userMessage.INFO_NOT_VALID);
  }
};

module.exports = { createUser };
