const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', userController.register);
router.put('/update', userController.update);

module.exports = router;
