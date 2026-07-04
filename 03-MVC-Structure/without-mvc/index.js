import express from 'express';
const app = express();
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send("<h1> Home page </h1>")
})

//for error page
app.use((req, res, next) => {
    res.status(404).send("<h1> 404 page not found </h1>")
})

app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`);
})
