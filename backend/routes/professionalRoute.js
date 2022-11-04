const express = require("express");
const { getAllProfessionals, getSingleProfessional, updateProfessional, deleteSingleProfessional, deleteAllProfessionals, addProfessional, updateProService } = require("../controllers/professionalController");
const { getProServices } = require("../controllers/serviceController");

const router = express.Router();

router.get("/", getAllProfessionals)
router.post("/register", addProfessional)
router.get("/:proId", getSingleProfessional)
router.put("/service/:serviceId", updateProService)
router.get("/service/:proId", getProServices)
router.put("/:proId", updateProfessional)
router.delete("/destroy", deleteAllProfessionals)
router.delete("/:proId", deleteSingleProfessional)


module.exports = router;