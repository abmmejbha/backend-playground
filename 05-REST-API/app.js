import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"
import userRouter from './routes/user.route.js'
import connectDB from './config/db.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/users', userRouter)

// api/users : GET
// api/users/:id : GET
// api/users/  POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views', 'index.html'))
})
app.use((req, res, next) => {
    res.status(404).json({
        message: "route not found"
    })
})
app.use((err, req, res, next) => {
    res.status(500).json({
        message: "server error"
    })
})

export default app 