const router = require("express").Router();
const mongoose = require("mongoose");

const Hotel = require("../model/hotel.model");
const hotels = require("../data/hotels");

router.post("/add",async(req,res)=>{
    try {
        await Hotel.deleteMany({});
        const hotelsInDb = await Hotel.insertMany(hotels.data);
        res.json(hotelsInDb); 
    } catch (error) {
        res.json({msg:error.message})
    }
})

module.exports = router