const express = require('express');
const productController = require('../controllers/product.controller');

const router = express.Router();

router.get('/getAll', productController.getAll);
router.get('/getByCategory', productController.getProductsByCategory);
router.post('/create', productController.createProduct);

module.exports = router;
