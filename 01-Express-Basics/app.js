import express from 'express';
const app = express();
import userRouter from './routes/users.route.js'
import path from 'path';

// For parsing application/json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/user', userRouter)

// register page serving
app.get("/register", (req, res) => {
  res.status(200).sendFile(path.resolve('views', 'register.html'));
});

// Home page serving
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('views', 'index.html'));
});

// Form
app.post("/register", (req, res) => {
  const {fullName, age}= req.body
  res.status(200).json({
    message: `Congratulation ${fullName} Your Registration successful`,
    data: {fullName, age}
  })
})

// Global 404 Handling
app.use((req, res) => {
  res.status(404).send("<h1>404 NOT FOUND :( </h1>")
})

export default app;