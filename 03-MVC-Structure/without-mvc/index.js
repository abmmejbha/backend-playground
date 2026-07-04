import express from 'express';
const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("<h1> Home page </h1>")
})

app.get('/users', (req, res) =>{
    res.send(htmlForm)
})

const users = [
    {
        name: "Shams Alam",
        age: 30,
        email: "shamsalam@gmail.com"
    },
    {
        name: "Rakibul Islam",
        age: 25,
        email: "rakibul.islam@gmail.com"
    }
]

const htmlForm = `
    <form action="/users" method="POST">
        <input type="text" name="name" placeholder="Enter your name">
        <input type="number" name="age" placeholder="Enter your age">
        <input type="text" name="email" placeholder="Enter your email">
        <button type="submit">save user</button>
    </form>
`

app.post('/users', (req, res) => {
    const {name, age, email} = req.body
    const newUser = {
        name,
        age,
        email
    }
    users.push(newUser)
    res.status(201).json({message: "User created successfully", user: newUser})
})

//for error page
app.use((req, res, next) => {
    res.status(404).send("<h1> 404 page not found </h1>")
})

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
})
