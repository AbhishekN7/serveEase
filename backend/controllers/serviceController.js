const jwt = require("jsonwebtoken");
const service = require("../models/serviceModel")
const professional = require("../models/professionalModel")
exports.getAllServices = async (req, res) => {
    try {
        const result = await service.find({ booked: false }).populate('professional', 'name');
        res.json({
            count: result.count,
            message: "Services Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}

exports.addService = async (req, res) => {
    try {
        console.log(req.body);
        const bearer = req.headers.authorization;
        const token = bearer.split(" ")[1];
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        const result = await service.create({ ...req.body, professional: id });
        console.log(result);
        res.json({
            message: "Service Created Successfully",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}


exports.getSingleService = async (req, res) => {
    try {
        console.log(req.params.serviceId);
        if (!req.params.serviceId) {
            throw new Error("Single Service Fetched")
        }
        const result = await service.find({ _id: req.params.serviceId }).populate("professional");
        res.json({
            message: "Single Service Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}

exports.updateService = async (req, res) => {
    try {
        // console.log(req.params.serviceId);
        if (!req.params.serviceId) {
            throw new Error("Service id not given");
        }
        const result = await service.findByIdAndUpdate(req.params.serviceId, req.body, { new: true })
        res.json({
            message: "Service Updated",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}

exports.deleteSingleService = async (req, res) => {
    try {
        console.log(req.params.serviceId);
        if (!req.params.serviceId) {
            throw new Error("Service id not given");
        }
        const result = await service.findByIdAndDelete(req.params.serviceId)
        res.json({
            message: "Single Service Deleted"
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}

exports.deleteAllServices = async (req, res) => {
    try {
        const result = await service.deleteMany();
        res.json({
            message: "All Services deleted"
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error.message
        })
    }
}

exports.getProServices = async (req, res) => {
    try {
        if (!req.params.proId) {
            throw new Error("Professional Id not given");
        }
        const result = await service.find({ ownerId: req.params.proId });
        res.json({
            message: "Professional Service Fetched",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error
        })
    }
}

exports.userBookedServices = async (req, res) => {
    try {
        const result = await service.find({ booked: true }).populate("professional", "name");
        console.log(result);
        res.json({
            message: "User Booked Service Fetched",
            result
        })
    } catch (error) {
        res.status(401).json({
            message: "Error" + error
        })
    }
}