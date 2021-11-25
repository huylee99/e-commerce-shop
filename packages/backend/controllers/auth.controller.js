const authService = require('../services/auth.service');
const tokenService = require('../services/token.service');

const login = async (req, res) => {
  try {
    const {
      user,
      cart: userCart,
      message,
    } = await authService.loginService(req.body.email, req.body.password);

    const token = tokenService.authTokenGenerator(user._id);
    res.status(200).send({ message, token, user, userCart });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const { cart, user } = await tokenService.verifyToken(
      req.headers.authorization
    );

    res.status(200).send({ cart, user });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = { login, verify };
