const mongoose = require("mongoose");

const wishListSchema = new mongoose.Schema(
    {
        hotelId:{
            type:String,
            required:true,
            unique:true
        }
    }
)

const Wishlist = mongoose.model("wishlists",wishListSchema);

module.exports = Wishlist;