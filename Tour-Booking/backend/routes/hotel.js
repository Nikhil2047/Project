const router = require("express").Router()

const Hotel = require("../model/hotel.model");
const hotelHandler = require("../controllers/HotelController")

router.get("/",hotelHandler)

module.exports = router


