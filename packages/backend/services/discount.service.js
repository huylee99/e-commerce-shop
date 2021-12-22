const { Discount } = require('../database/models/discount.model');
const commonMessage = require('../core/constants/common.constant');

const addDiscount = async data => {
  const discountCode = Math.random().toString(16).slice(-6).toUpperCase();
  const discount = new Discount({ ...data, discountCode });
  await discount.save();

  return { discount, message: commonMessage.CREATE_SUCCESSFULLY };
};

const applyDiscount = async discountCode => {
  const code = await Discount.findOne({ discountCode });
  const applyDate = Date.now();

  if (code) {
    if (applyDate > code.validFrom && applyDate < code.validTo) {
      return { code, message: commonMessage.GET_SUCCESSFULLY };
    }

    throw Error(commonMessage.EXPIRED_CODE);
  } else {
    throw Error(commonMessage.INVALID_CODE);
  }
};

module.exports = { addDiscount, applyDiscount };
