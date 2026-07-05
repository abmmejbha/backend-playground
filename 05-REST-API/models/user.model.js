import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'; 

const userSchema = mongoose.Schema({
    id:{
        type:String,
        default: uuidv4,
        unique: true
    },
    name:{
        type:String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
})

const User = mongoose.model('User', userSchema)

export default User