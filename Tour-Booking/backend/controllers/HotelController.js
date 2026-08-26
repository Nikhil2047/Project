const Hotel = require("../model/hotel.model");

const hotelHandler = async (req,res)=>{
    const hotelCategory = req.query.category
   try {
    let hotels;
    if(hotelCategory){
        hotels = await Hotel.find({category:hotelCategory})
    }else{
        hotels = await Hotel.find({});
    }
    hotels ? res.json(hotels) : res.status(404).json({msg:"No Data Found"})
   } catch (error) {
    res.json({msg:error.message})
   }
}

module.exports = hotelHandler;