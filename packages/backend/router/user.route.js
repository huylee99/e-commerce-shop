const express = require('express');
const userController = require('../controllers/user.controller');
const { tokenVerification } = require('../middlewares/auth');

const router = express.Router();

router.post('/register', userController.register);
router.put('/update', tokenVerification, userController.update);
router.put('/updateAddress', tokenVerification, userController.updateAddress);
router.post('/addAddress', tokenVerification, userController.addAddress);
router.put('/updatePassword', tokenVerification, userController.updatePassword);
router.delete(
  '/deleteAddress',
  tokenVerification,
  userController.deleteAddress
);

module.exports = router;
