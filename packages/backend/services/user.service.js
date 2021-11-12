const { User } = require('../database/models/user.model');
const userMessage = require('../core/constants/user.constant');

const createUser = async data => {
  const isEmailUsed = await User.checkEmail(data.email);

  if (!isEmailUsed) {
    const user = new User(data);
    await user.save();

    const result = user.toJSON();
    return { result, message: userMessage.CREATE_SUCCESSFULLY };
  } else {
    throw Error(userMessage.INFO_NOT_VALID);
  }
};

const updateUser = async (_id, data) => {
  const updatedUser = await User.updateInformation(_id, data);

  const result = updatedUser.toJSON();
  if (updatedUser) {
    return { result, message: userMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(userMessage.UPDATE_FAILED);
};

module.exports = { createUser, updateUser };