const express = require('express');
const discountController = require('../controllers/discount.controller');

const router = express.Router();

router.post('/create', discountController.addDiscount);
router.get('/apply', discountController.applyDiscount);
router.get('/get', discountController.getDiscount);

module.exports = router;
