const professional = require("../models/professionalModel");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const service = require("../models/serviceModel")

exports.getAllProfessionals = async (req, res) => {
    try {
        const result = await professional.find();
        res.json({
            message: "All Professionals Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.addProfessional = async (req, res) => {
    try {
        console.log(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);
        const result = await professional.create({ ...req.body, password: hash })
        const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET)
        res.json({
            message: "Professional Created",
            result: {
                name: result.name,
                email: result.email,
                id: result._id,
                service: result.service,
                token: `Bearer ${token}`
            }
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.getSingleProfessional = async (req, res) => {
    try {
        if (!req.params.proId) {
            throw new Error("Professional Id not given");
        }

        const result = await professional.findOne({ _id: req.params.proId })
        res.json({
            message: "Single Professional Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.updateProfessional = async (req, res) => {
    try {
        if (!req.params.proId) {
            throw new Error("Pro Id not given");
        }
        const result = await professional.findByIdAndUpdate({ _id: req.params.proId }, req.body, { new: true });
        res.json({
            message: "Professional Updated",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.updateProService = async (req, res) => {
    try {
        if (!req.params.serviceId) {
            throw new Error("Pro Id is not given");
        }
        const result = await service.findByIdAndUpdate(req.params.serviceId, req.body, { new: true });
        res.json({
            message: "Service Updated",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.deleteSingleProfessional = async (req, res) => {
    try {
        const result = await professional.findByIdAndDelete(req.params.proId)
        res.json({
            message: "Single Professional Deleted"
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}

exports.deleteAllProfessionals = async (req, res) => {
    try {
        const result = await professional.deleteMany();
        res.json({
            message: "All Professionals Deleted"
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error
        })
    }
}
