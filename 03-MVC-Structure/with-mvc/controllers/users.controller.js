import users from "../models/users.model.js"

import path from 'path'

export const getUser = (req, res) => {
    res.sendFile(path.resolve('views', 'index.html'))
}

export const saveUser = (req, res) => {
    const {name, age, email} = req.body
    const newUser = {
        name,
        age,
        email
    }
    users.push(newUser)
    res.status(201).json({message: "User created successfully", user: newUser})
}

export default {
    getUser,
    saveUser
}