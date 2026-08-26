const router = require("express").Router();

const verifyUser = require("../middleware/verifyuser");
const Wishlist = require("../model/wishlist.model");
const wishlistHandler = require("../controllers/WishlistController")
const {createWishlist,deleteWishlist,getWishlist} = wishlistHandler;

router.post("/addwishlist",verifyUser,createWishlist)

router.get("/allwishlists",verifyUser,getWishlist)

router.delete("/deletewishlist/:id",verifyUser,deleteWishlist)

module.exports = router