const mongoose  = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const url = process.env.DATABASE_URI


const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;