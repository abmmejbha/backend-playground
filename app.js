import express from 'express';
const app = express();
import userRouter from './routes/users.route.js'
import path from 'path';

app.use('/api/user', userRouter)

// register page serving
app.get("/register", (req, res) => {
  res.status(200).sendFile(path.resolve('views', 'register.html'));
});

// query parameter testing route 
app.get('/search', (req, res) => {
  const { id, name } = req.query;
  res.status(200).send(`Student name is ${name}, student id is: ${id}`);
});

// Home page serving
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('views', 'index.html'));
});

// Global 404 Handling
app.use((req, res) => {
  res.status(404).send("<h1>404 NOT FOUND :( </h1>")
})

export default app;