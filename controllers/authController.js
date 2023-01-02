const user = require("../models/userModel")
const professional = require("../models/professionalModel")
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.loginUser = async (req, res) => {
    try {
        const result = await user.findOne({ email: req.body.email })
        if (!result) {
            return res.status(401).json({
                message: "Email Not found"
            })
        }

        const verify = await bcryptjs.compare(req.body.password, result.password);
        if (!verify) {
            return res.status(401).json({
                message: "Invalid Password"
            })
        }
        const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET)

        res.json({
            message: "User Login Successfull",
            result: {
                name: result.name,
                email: result.email,
                id: result._id,
                admin: result.admin,
                token: `Bearer ${token}`
            }
        })

    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.loginProfessional = async (req, res) => {
    try {

        const result = await professional.findOne({ email: req.body.email })
        if (!result) {
            return res.status(401).json({
                message: "Email Not found"
            })
        }

        const verify = await bcryptjs.compare(req.body.password, result.password)
        if (!verify) {
            return res.status(401).json({
                message: "Incorrect Password"
            })
        }

        const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET)

        return res.json({
            message: "Professional Login Successfull",
            result: {
                name: result.name,
                email: result.email,
                password: result.password,
                id: result.id,
                service: result.service,
                city: result.city,
                token: `Bearer ${token}`
            }
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}