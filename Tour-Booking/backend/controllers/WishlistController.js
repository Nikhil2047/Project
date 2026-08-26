const Wishlist = require("../model/wishlist.model");

const createWishlist = async(req,res)=>{
    try {
        const wishlist = await Wishlist.create(req.body);
        res.json({msg:"Hotel added to wishlist successfully",success:true})
    } catch (error) {
        res.json({msg:"failled to create wishlist"})
    }
}

const deleteWishlist = async(req,res)=>{
    try {
        await Wishlist.findByIdAndDelete(req.params.id);
        res.json({msg:"Hotel is deleted from whishlist"})
    } catch (error) {
        res.json({msg:error.message})
    }
}

const getWishlist = async(req,res)=>{
    try {
        const wishlist = await Wishlist.find();
        res.json(wishlist)
    } catch (error) {
        res.json({msg:error.message})
    }
}

module.exports = {createWishlist,deleteWishlist,getWishlist}