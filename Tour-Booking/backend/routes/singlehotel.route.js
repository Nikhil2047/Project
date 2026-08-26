const router = require("express").Router()

const Hotel = require("../model/hotel.model");
const singlehotelHandler = require("../controllers/SiglehotelController");

router.get("/:id",singlehotelHandler);

module.exports = router;