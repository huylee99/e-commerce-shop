const express = require('express');
const wishListController = require('../controllers/wishList.controller');
const { tokenVerification } = require('../middlewares/auth');

const router = express.Router();

router.post('/toggle', tokenVerification, wishListController.toggleWishList);
router.get('/get', tokenVerification, wishListController.getWishList);
router.delete(
  '/delete',
  tokenVerification,
  wishListController.deleteItemFromWishList
);

module.exports = router;
