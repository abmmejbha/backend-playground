import express from 'express'
const router = express.Router()
import { getProducts, saveProducts } from '../controllers/products.controller.js'

router.get('/products', getProducts)

router.post('/products', saveProducts)

export default router