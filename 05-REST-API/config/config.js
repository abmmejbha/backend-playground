import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 4000,
    dbUrl: process.env.DB_URL || 'mongodb://localhost:27017/mydatabase',
};

export default config;