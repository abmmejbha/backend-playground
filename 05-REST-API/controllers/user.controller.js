import User from '../models/user.model.js'

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({
            message: "all users",
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

const getOneUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findOne({ id }) 
        if (!user) {
            return res.status(404).json({
                message: "user not found",
                data: null
            })
        }
        res.status(200).json({
            message: "user found",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body)
        await newUser.save()
        res.status(201).json({
            message: "User is created",
            data: newUser 
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await User.findOneAndUpdate(
            { id: id },              
            { $set: req.body },     
            { new: true, runValidators: true } 
        );
        if (!updatedUser) {
            return res.status(404).json({
                message: "user not found to update"
            })
        }
        res.status(200).json({
            message: "User is updated",
            data: updatedUser 
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({ id });
        if (!user) {
            return res.status(404).json({
                message: "user not found to delete"
            });
        }
        await User.deleteOne({ id });
        res.status(200).json({
            message: "user deleted",
            data: user 
        })
    } catch (error) {
        res.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
}
export { getAllUsers, getOneUser, createUser, updateUser, deleteUser }