const user = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.getAllUsers = async (req, res) => {
    try {
        const result = await user.find();
        res.status(200).json({
            message: "Users Data Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.addUser = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);
        const result = await user.create({ ...req.body, password: hash })
        const token = await jwt.sign({ id: result._id }, process.env.JWT_SECRET)

        res.json({
            message: "User Added",
            result: {
                name: result.name,
                email: result.email,
                id: result._id,
                token: `Bearer ${token}`
            }
        })
    } catch (error) {
        res.status(401).json({
            message: "ERROR" + error
        })
    }
}

exports.getSingleUser = async (req, res) => {

    try {
        if (!req.params.userId) {
            throw new Error("User Id not given");
        }
        const result = await user.findOne({ _id: req.params.userId })
        if (!result) {
            throw new Error("User not find")
        }
        return res.json({
            count: result.count,
            message: "Single User Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        if (!req.params.userId) {
            throw new Error("User Id not given")
        }
        const result = await user.findByIdAndUpdate(req.params.userId, req.body, { new: true })
        res.json({
            message: "User Updated",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.deleteSingleUser = async (req, res) => {
    try {
        if (!req.params.userId) {
            throw new Error("User Id Not given")
        }
        const result = await user.findByIdAndDelete(req.params.userId)
        res.json({
            message: "User Deleted",
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.deleteAllUsers = async (req, res) => {
    try {
        const result = await user.deleteMany();
        res.json({
            message: "All Users Deleted"
        })
    } catch (error) {
        res.status(401).json({
            message: "error" + error
        })
    }
}


