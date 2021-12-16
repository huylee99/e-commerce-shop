const { User } = require('../database/models/user.model');
const { Address } = require('../database/models/address.model');

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
  const user = await User.findById(_id);

  const isMatched = await user.isPasswordMatched(data.currentPassword);

  if (isMatched) {
    user.password = data.newPassword;
    await user.save();
    return { message: commonMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(commonMessage.UPDATE_FAILED);
};

const updateAddress = async (addressId, data) => {
  const updatedAddress = await Address.findByIdAndUpdate(
    addressId,
    { ...data },
    { new: true }
  ).select('-uid');

  if (updatedAddress) {
    return { updatedAddress, message: commonMessage.UPDATE_SUCCESSFULLY };
  }

  throw Error(commonMessage.UPDATE_FAILED);
};

const addAddress = async (uid, data) => {
  try {
    const newAddress = new Address({ uid, ...data });
    await newAddress.save();

    const newObj = newAddress.toObject();

    console.log(newObj);

    return { newAddress, message: commonMessage.CREATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

module.exports = {
  createUser,
  updateUser,
  updateAddress,
  addAddress,
  updatePassword,
};
