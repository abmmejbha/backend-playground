import express from 'express';
const app = express();
import userRouter from './routes/users.route.js'
import path from 'path';

app.use('/api/user', userRouter)

app.get("/register", (req, res) => {
  // res.status(200).json({
  //   "name" : "ABM Mejbha",
  //   "message" : "This is Register Page",
  //   statusCode: 200, 
  // })

  res.statusCode = 200;
  res.sendFile(path.resolve('views', 'register.html'))
})

app.get('/',(req, res) => {
  const {id, name} = req.query;
  res.send(`student name is ${name} ,  student id is : ${id}`)
  // res.statusCode = 200;

  //res.sendFile(__dirname+"/views/index.html")
  // কোনো __dirname ছাড়াই ডিরেক্টলি এভাবে লেখ:
  // res.sendFile(path.resolve('views', 'index.html'));
})

app.use((req, res) => {
  res.send("<h1>404 NOT FOUND :( </h1>")
})



// real API-তে res.send() দিয়ে text না পাঠিয়ে res.json() দিয়ে JSON পাঠানো হয়
// app.get('/user', (req, res) => {
//   res.json({
//     name: 'Mejbha',
//     age: 22,
//     university: 'BUBT'
//   });
// });


export default app;