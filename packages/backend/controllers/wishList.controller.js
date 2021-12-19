const wishListService = require('../services/wishList.service');

const toggleWishList = async (req, res) => {
  try {
    const { wishList, message } = await wishListService.toggleWishList(
      req.uid,
      req.body.productId
    );

    res.status(200).send({ wishList, message });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = { toggleWishList };
