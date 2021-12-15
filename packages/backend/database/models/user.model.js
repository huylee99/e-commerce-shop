const { model, Schema, Types } = require('mongoose');
const {
  hashGenerator,
  comparePassword,
} = require('../../core/helpers/passwordHelpers');

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  addressList: [
    {
      _id: {
        type: Types.ObjectId,
        auto: true,
      },
      data: {
        address: {
          type: String,
          trim: true,
        },
        fullName: {
          type: String,
          trim: true,
        },
        phone: {
          type: String,
          trim: true,
        },
      },
    },
  ],
  coupons: [
    {
      id: {
        type: String,
      },
      code: {
        type: String,
      },
    },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
  avatarImg: {
    type: String,
    default:
      'https://res.cloudinary.com/dlbkvfo8l/image/upload/v1636572915/img_avatar_faar3c.png',
  },
});

userSchema.path('_id');

userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    const hashedPassword = await hashGenerator(user.password);
    user.password = hashedPassword;
  }
  next();
});

userSchema.methods.isPasswordMatched = async function (rawPassword) {
  const user = this;
  return await comparePassword(rawPassword, user.password);
};

userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

userSchema.statics.checkEmail = async function (email) {
  const users = this;
  const user = await users.findOne({ email });
  return user;
};

userSchema.statics.updateInformation = async function (_id, data) {
  const users = this;
  const user = await users.findOneAndUpdate(
    { _id },
    { ...data },
    { new: true }
  );

  return user;
};

userSchema.statics.addShippingInfo = async function (uid, data) {
  const users = this;
  const user = await users.findById(uid);

  if (user) {
    user.addressList.push({ data });
  } else {
    throw Error('Not found');
  }

  await user.save();

  return user;
};

userSchema.statics.updateShippingInfo = async function (uid, addressId, data) {
  const users = this;
  const user = await users.findById(uid);

  const isFound = user.addressList.find(
    address => address._id.toString() === addressId
  );

  if (isFound) {
    isFound.data = data;
  } else {
    throw Error('Not Found');
  }

  await user.save();

  return user;
};

const User = model('user', userSchema);

module.exports = { User };
