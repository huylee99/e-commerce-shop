const jwt = require('jsonwebtoken');
const splitToken = require('../core/helpers/splitToken');
const authMessage = require('../core/constants/auth.constant');

const tokenVerification = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: authMessage.LOGIN_REQUIRED });
  }

  const token = splitToken(authHeader);
  const result = jwt.verify(token, process.env.JWT_SECRET);

  req.uid = result.userId;

  next();
};

module.exports = { tokenVerification };
