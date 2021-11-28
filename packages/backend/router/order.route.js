const express = require('express');
const orderController = require('../controllers/order.controller');

const router = express.Router();

router.post('/create', orderController.createOrder);

module.exports = router;
