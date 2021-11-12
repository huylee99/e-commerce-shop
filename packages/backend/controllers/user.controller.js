const userService = require('../services/user.service');
const tokenService = require('../services/token.service');

const register = async (req, res) => {
  try {
    const { result: user, message } = await userService.createUser(req.body);
    const token = tokenService.authTokenGenerator(user._id);

    res.status(201).send({ user, token, message });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const { result: user, message } = await userService.updateUser(
      req.body._id,
      req.body.data
    );

    res.status(200).send({ user, message });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = { register, update };
