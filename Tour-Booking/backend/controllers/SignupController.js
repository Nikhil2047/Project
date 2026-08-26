const bcrypt = require("bcrypt");

const User = require("../model/user.model");

const signupHandler = async(req,res)=>{
     try {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password,salt)

        const user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:password,
            number:req.body.number
        })
        res.json(user)
    } catch (error) {
        res.json({msg:error.message})
    }
}

module.exports = signupHandler;