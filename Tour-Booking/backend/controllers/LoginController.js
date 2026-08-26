const bcrypt = require("bcrypt");

const User = require("../model/user.model");

const jwt = require("jsonwebtoken");

const loginHandler = async(req,res)=>{
    try {
        const user = await User.findOne({number:req.body.number});
        if(user){
            const result = await bcrypt.compare(req.body.password, user.password)
            if(result){
                const token = jwt.sign(
                    {id:user._id},"secretkey"
                )
                 return res.status(200).json({ token, username: user.username, success: true});
            }else{
                return res.status(401).json({ msg: "Wrong Password", success: false });
            }
        }else{
            return res.status(404).json({msg:"No user found", success:false})
        }
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports = loginHandler;