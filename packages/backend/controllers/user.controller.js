const userService = require('../services/user.service');
const tokenService = require('../services/token.service');

const register = async (req, res) => {
  try {
    const { result: user, message } = await userService.createUser(req.body);
    const token = tokenService.authTokenGenerator(user._id);

    res.status(201).send({ user, token, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { result: user, message } = await userService.updateUser(
      req.uid,
      req.body.data
    );

    res.status(200).send({ user, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const updateShippingInfo = async (req, res) => {
  try {
    const { result: user, message } = await userService.updateShippingInfo(
      req.uid,
      req.body.addressId,
      req.body.data
    );

    res.status(200).send({ user, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const addShippingInfo = async (req, res) => {
  try {
    const { result: user, message } = await userService.addShippingInfo(
      req.uid,
      req.body.data
    );
    res.status(200).send({ user, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  register,
  update,
  updateShippingInfo,
  addShippingInfo,
};
