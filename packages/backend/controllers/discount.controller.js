const discountService = require('../services/discount.service');

const addDiscount = async (req, res) => {
  try {
    const { discount, message } = await discountService.addDiscount(req.body);
    res.status(200).send({ discount, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const applyDiscount = async (req, res) => {
  const { discountCode } = req.query;

  try {
    const { code, message } = await discountService.applyDiscount(discountCode);

    res.status(200).send({ discount: code, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { addDiscount, applyDiscount };
