import dns from "dns";
import express from "express";
import app from "./app.js";
import config from './config/config.js';
import connectDB from './config/db.js';

const PORT = config.port;
dns.setServers(["8.8.8.8", "8.8.4.4"]);


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`)
})
