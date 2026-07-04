import products from "../models/products.model.js"

import path from 'path'

export const getProducts = (req, res) => {
    res.sendFile(path.resolve('views', 'product.html'))
}

export const saveProducts = (req, res) => {
    const {name, price, description} = req.body
    const newProduct = {
        name,
        price,
        description
    }
    products.push(newProduct)
    res.status(201).json({message: "Product created successfully", product: newProduct})
}

export default {
    getProducts,
    saveProducts
}