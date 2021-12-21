const authService = require('../services/auth.service');
const tokenService = require('../services/token.service');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { user, cart, message, wishList, addresses } =
      await authService.loginService(email, password);

    const token = tokenService.authTokenGenerator(user._id);
    res.status(200).send({ message, token, user, cart, addresses, wishList });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

const verify = async (req, res) => {
  try {
    const { cart, user, addresses, wishList } = await tokenService.verifyToken(
      req.headers.authorization
    );

    res.status(200).send({ cart, user, addresses, wishList });
  } catch (error) {
    res.status(401).send({ message: error.message });
  }
};

module.exports = { login, verify };
