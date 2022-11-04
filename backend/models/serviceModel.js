const mongoose = require("mongoose")

const serviceShema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Enter Service"]
    },
    price: {
        type: String,
        required: [true, "Enter Price"]
    },
    city: { type: String, required: [true, "Enter City"] },
    // mobile: { type: Number, required: [true, "Enter Mobile Number"] },
    publish: { type: Boolean, default: false },
    verify: { type: Boolean, default: true },
    professional: {
        type: mongoose.Types.ObjectId, ref: "professional",
        required: [true, "Please Provide Professional Id"]
    },
    booked: {
        type: Boolean, default: false
    }
    // name: [{
    //     type: mongoose.Types.ObjectId, ref: "professional",
    //     required: [true, "Please Provide name of professional"]
    // }]
})

module.exports = mongoose.model("service", serviceShema);