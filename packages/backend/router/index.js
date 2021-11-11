const express = require('express');
const userRouter = require('./user.route');
const authRouter = require('./auth.route');

const router = express.Router();

router.use('/user', userRouter);
router.use('/auth', authRouter);

module.exports = router;
