const { WishList } = require('../database/models/wishlist.model');
const commonMessage = require('../core/constants/common.constant');

const toggleWishList = async (uid, productId) => {
  try {
    const isFound = await WishList.findOne({ uid }).select('-__v -uid');

    if (!isFound) {
      const newWishList = new WishList({
        uid,
        products: [productId],
      });

      await newWishList.save();

      return {
        wishList: newWishList,
        message: commonMessage.CREATE_SUCCESSFULLY,
      };
    } else {
      if (isFound.products.includes(productId)) {
        isFound.products = isFound.products.filter(
          id => id.toString() !== productId
        );
        await isFound.save();

        return {
          wishList: isFound,
          message: commonMessage.DELETE_SUCCESSFULLY,
        };
      } else {
        isFound.products.push(productId);
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

const getWishList = async uid => {
  try {
    const wishList = await WishList.findOne({ uid }).populate({
      path: 'products',
      model: 'products',
      select: '-__v -rating -unit -tags -categories -uid',
    });

    return { wishList, message: commonMessage.GET_SUCCESSFULLY };
  } catch (error) {
    throw Error(commonMessage.GET_FAILED);
  }
};

const deleteItemFromWishList = async (uid, productId) => {
  try {
    const updatedWishList = await WishList.findOneAndUpdate(
      { uid },
      { $pull: { products: productId } }
    );

    if (updatedWishList.products.includes(productId)) {
      return { productId, message: commonMessage.DELETE_SUCCESSFULLY };
    }

    throw Error(commonMessage.UPDATE_FAILED);
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { toggleWishList, getWishList, deleteItemFromWishList };
