const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
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
        required: [true, "Enter City"]
    },
    admin: {
        type: Boolean, default: false
    }
}, { timestamp: true })

module.exports = mongoose.model("user", userSchema)