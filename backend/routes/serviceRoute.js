const express = require("express");
const { getAllServices, getSingleService, updateService, deleteSingleService, deleteAllServices, addService, getProServices, userBookedServices } = require("../controllers/serviceController");

const router = express.Router();

router.get("/", getAllServices)
router.post("/", addService)
router.get("/user/booked/", userBookedServices)
router.get("/pro/service/:proId", getProServices)
router.get("/:serviceId", getSingleService)
router.put("/user/:serviceId", updateService)
// router.put("/:serviceId", updateService)
router.delete("/destroy", deleteAllServices)
router.delete("/:serviceId", deleteSingleService)


module.exports = router