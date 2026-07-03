import app from './app.js'
import express from 'express';

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port} পোর্টে সার্ভার চলছে।`);
})

