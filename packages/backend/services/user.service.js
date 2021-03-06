const { User } = require('../database/models/user.model');
const { Address } = require('../database/models/address.model');

const commonMessage = require('../core/constants/common.constant');

const createUser = async data => {
  const isEmailUsed = await User.checkEmail(data.email);

  if (!isEmailUsed) {
    const user = new User(data);
    await user.save();

    return { user, message: commonMessage.CREATE_SUCCESSFULLY };
  } else {
    throw Error(commonMessage.INFO_NOT_VALID);
  }
};

const updateUser = async (_id, data) => {
  if ('password' in data) {
    throw Error(commonMessage.INFO_NOT_VALID);
  }

  const updatedUser = await User.updateInformation(_id, data);

  if (updatedUser) {
    return { updatedUser, message: commonMessage.UPDATE_SUCCESSFULLY };
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
  ).select('-uid -__v');

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

    delete newObj.__v;
    delete newObj.uid;

    return { newAddress: newObj, message: commonMessage.CREATE_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.CREATE_FAILED);
  }
};

const deleteAddress = async addressId => {
  try {
    const deletedAddress = await Address.findOneAndDelete({
      _id: addressId,
    }).select('_id');

    return {
      addressId: deletedAddress._id,
      message: commonMessage.UPDATE_SUCCESSFULLY,
    };
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

module.exports = {
  createUser,
  updateUser,
  updateAddress,
  addAddress,
  updatePassword,
  deleteAddress,
};
