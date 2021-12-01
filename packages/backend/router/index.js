const express = require('express');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const productRouter = require('./product.route');
const cartRouter = require('./cart.route');
const orderRouter = require('./order.route');

const { tokenVerification } = require('../middlewares/auth');

const router = express.Router();

router.use('/user', tokenVerification, userRouter);
router.use('/auth', authRouter);
router.use('/product', productRouter);
router.use('/cart', tokenVerification, cartRouter);
router.use('/order', orderRouter);

module.exports = router;
