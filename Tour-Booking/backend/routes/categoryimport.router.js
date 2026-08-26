const router = require("express").Router();
const mongoose = require("mongoose");

const Category = require("../model/category.model");
const categories = require("../data/categories");

router.post("/add",async(req,res)=>{
    try {
        await Category.deleteMany({});
        const categoriesInDb = await Category.insertMany(categories.data);
        res.json(categoriesInDb); 
    } catch (error) {
        res.json({msg:error.message})
    }
})

module.exports = router