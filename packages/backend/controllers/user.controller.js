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

const updatePassword = async (req, res) => {
  try {
    const { message } = await userService.updatePassword(req.uid, req.body);
    const token = tokenService.authTokenGenerator(req.uid);

    res.status(200).send({ token, message });
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

const updateAddress = async (req, res) => {
  try {
    const { updatedAddress, message } = await userService.updateAddress(
      req.body.addressId,
      req.body.data
    );

    res.status(200).send({ updatedAddress, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const addAddress = async (req, res) => {
  try {
    const { newAddress, message } = await userService.addAddress(
      req.uid,
      req.body
    );
    res.status(200).send({ newAddress, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = {
  register,
  update,
  updateAddress,
  addAddress,
  updatePassword,
};
