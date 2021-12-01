const express = require('express');
const orderController = require('../controllers/order.controller');
const { tokenVerification } = require('../middlewares/auth');

const router = express.Router();

router.post('/create', tokenVerification, orderController.createOrder);
router.get('/get', orderController.getOrder);

module.exports = router;
