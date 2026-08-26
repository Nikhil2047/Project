const router = require("express").Router();
const mongoose = require("mongoose");

const Category = require("../model/category.model");
const categoryHandler = require("../controllers/CategoryController");

router.get("/",categoryHandler);

module.exports = router