const jwt = require("jsonwebtoken");

function verifyUser(req,res,next){
    const token = req.headers["authorization"];
    if(token){
        jwt.verify(token,"secretkey",(err,user)=>{
            if(err){
                return res.json({msg:"Access Denied"})
            }else{
                req.userId = user.id;
                next()
            }
        })
    }else{
        return res.json({msg:"Invalid request"})
    }
}

module.exports = verifyUser;