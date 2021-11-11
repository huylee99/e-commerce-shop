const authService = require('../services/auth.service');
const tokenService = require('../services/token.service');
const authMessage = require('../core/constants/auth.constant');

const login = async (req, res) => {
  try {
    const user = await authService.loginService(
      req.body.email,
      req.body.password
    );
    const token = tokenService.authTokenGenerator(user._id);
    res
      .status(201)
      .send({ message: authMessage.LOGIN_SUCCESSFULLY, token, user });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const isVerified = await tokenService.verifyToken(
      req.headers.authorization
    );

    if (isVerified) {
      res.status(200).send({ message: authMessage.TOKEN_VERIFIED });
    }
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = { login, verify };
