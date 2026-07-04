import express from 'express'
const router = express.Router()


router.get('/register', (req, res) => {
    res.send("<h1>get request from register route</h1>")
})

router.get('/login', (req, res) => {
    res.send("<h1> Get request from Login route</h1>")
})

export default router