const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.register);
router.put('/update', userController.update);
router.put('/updateShippingInfo', userController.updateShippingInfo);
router.put('/addShippingInfo', userController.addShippingInfo);

module.exports = router;
