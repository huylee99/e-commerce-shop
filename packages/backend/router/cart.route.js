const express = require('express');
const cartController = require('../controllers/cart.controller');

const router = express.Router();

router.put('/increase', cartController.add);
router.put('/decrease', cartController.remove);
router.get('/get', cartController.getCart);
router.delete('/delete', cartController.deleteItem);

module.exports = router;
