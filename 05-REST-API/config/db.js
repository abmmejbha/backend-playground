import mongoose from 'mongoose';
import config from './config.js';

const db = config.dbUrl

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log("MongoDB Atlas is connected successfully")
    }catch(error){
        console.error("Database connection is failed ❌",error.message)
        process.exit(1)
    }
}
export default connectDB