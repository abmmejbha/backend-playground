import express from 'express'
const app = express()
import path from 'path'
import areaRouter from './routes/area.route.js'

// For parsing application/json
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/area', areaRouter)

app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve('views', 'index.html'))
})

app.get('/circle', (req, res) => {
    res.status(200).sendFile(path.resolve('views', 'circle.html'))
})

app.get('/rectangle', (req, res) => {
    res.status(200).sendFile(path.resolve('views', 'rectangle.html'))
})

export default app