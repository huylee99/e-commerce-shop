const { WishList } = require('../database/models/wishlist.model');
const commonMessage = require('../core/constants/common.constant');

const toggleWishList = async (uid, productId) => {
  try {
    const isFound = await WishList.findOne({ uid }).select('-__v -uid');

    if (!isFound) {
      const newWishList = new WishList({
        uid,
        wishList: [productId],
      });

      await newWishList.save();

      return {
        wishList: newWishList,
        message: commonMessage.CREATE_SUCCESSFULLY,
      };
    } else {
      if (isFound.wishList.includes(productId)) {
        isFound.wishList = isFound.wishList.filter(
          id => id.toString() !== productId
        );
        await isFound.save();

        return {
          wishList: isFound,
          message: commonMessage.DELETE_SUCCESSFULLY,
        };
      } else {
        isFound.wishList.push(productId);
        await isFound.save();

        return {
          wishList: isFound,
          message: commonMessage.UPDATE_SUCCESSFULLY,
        };
      }
    }
  } catch (error) {
    throw Error(commonMessage.UPDATE_FAILED);
  }
};

module.exports = { toggleWishList };
