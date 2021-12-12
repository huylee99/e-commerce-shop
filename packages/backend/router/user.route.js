const express = require('express');
const userController = require('../controllers/user.controller');
const { tokenVerification } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', userController.register);
router.put('/update', tokenVerification, userController.update);
router.put(
  '/updateShippingInfo',
  tokenVerification,
  userController.updateShippingInfo
);
router.put(
  '/addShippingInfo',
  tokenVerification,
  userController.addShippingInfo
);
router.put('/updatePassword', tokenVerification, userController.updatePassword);

module.exports = router;
