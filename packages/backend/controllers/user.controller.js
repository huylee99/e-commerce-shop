const userService = require('../services/user.service');
const tokenService = require('../services/token.service');
const userMessage = require('../core/constants/user.constant');

const userController = {
  register: async (req, res) => {
    try {
      const user = await userService.createUser(req.body);
      const token = tokenService.authTokenGenerator(user._id);

      res
        .status(201)
        .send({ user, token, message: userMessage.CREATE_SUCCESSFULLY });
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  },
};

module.exports = userController;
