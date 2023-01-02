const mongoose = require("mongoose");

const professionalSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Not given"]
    },
    email: {
        type: String,
        required: [true, "Email not given"]
    },
    mobile: {
        type: Number,
        required: [true, "Mobile not given"]
    },
    password: {
        type: String,
        required: [true, "Password not given"]
    },
    city: {
        type: String,
        required: [true, "City not given"]
    },
    isProfessional: { type: Boolean, default: true },
    service: {
        type: String,
        ref: "service",
        required: [true, "Provide Service"]
    }
}, { timestamp: true })

module.exports = mongoose.model("professional", professionalSchema)