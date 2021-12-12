const { User } = require('../database/models/user.model');
const commonMessage = require('../core/constants/common.constant');

const createUser = async data => {
  const isEmailUsed = await User.checkEmail(data.email);

  if (!isEmailUsed) {
    const user = new User(data);
    await user.save();

    const result = user.toJSON();
    return { result, message: commonMessage.CREATE_SUCCESSFULLY };
  } else {
    throw Error(commonMessage.INFO_NOT_VALID);
  }
};

const updateUser = async (_id, data) => {
  const updatedUser = await User.updateInformation(_id, data);

  if (updatedUser) {
    const result = updatedUser.toJSON();
    return { result, message: commonMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(commonMessage.UPDATE_FAILED);
};

const updatePassword = async (_id, data) => {
  try {
    const user = await User.findById(_id);

    const isMatched = await user.isPasswordMatched(data.currentPassword);

    if (isMatched) {
      user.password = data.newPassword;
      await user.save();
    }

    return { message: commonMessage.UPDATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

const updateShippingInfo = async (uid, addressId, data) => {
  const updatedUser = await User.updateShippingInfo(uid, addressId, data);

  if (updatedUser) {
    const result = updatedUser.toJSON();
    return { result, message: commonMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(commonMessage.UPDATE_FAILED);
};

const addShippingInfo = async (uid, data) => {
  const updatedUser = await User.addShippingInfo(uid, data);

  if (updatedUser) {
    const result = updatedUser.toJSON();
    return { result, message: commonMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(commonMessage.UPDATE_FAILED);
};

module.exports = {
  createUser,
  updateUser,
  updateShippingInfo,
  addShippingInfo,
  updatePassword,
};
