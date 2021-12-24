const { model, Schema, Types } = require('mongoose');

const addressSchema = new Schema({
  uid: {
    type: Types.ObjectId,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

addressSchema.set('toJSON', {
  virtuals: true,
  transform: function (_, ret) {
    delete ret.__v;
    delete ret.id;
    delete ret.uid;
    return ret;
  },
});

addressSchema.path('_id');

const Address = model('address', addressSchema);

module.exports = { Address };
