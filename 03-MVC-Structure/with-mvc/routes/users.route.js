import express from 'express'
const router = express.Router()
import { getUser, saveUser } from '../controllers/users.controller.js'

router.get('/users', getUser)

router.post('/users', saveUser)

export default router