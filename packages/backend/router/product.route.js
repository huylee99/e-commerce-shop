const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/getProducts', productController.getAll);
router.post('/create', productController.createProduct);

module.exports = router;
