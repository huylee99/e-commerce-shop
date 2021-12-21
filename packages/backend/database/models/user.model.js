const { model, Schema } = require('mongoose');
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
  role: {
    type: String,
    default: 'user',
    required: true,
  },
});

userSchema.path('_id');

userSchema.set('toJSON', {
  virtuals: true,
  transform: function (_, ret) {
    delete ret.password;
    delete ret.__v;
    delete ret.id;
    return ret;
  },
});

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

const User = model('user', userSchema);

module.exports = { User };
