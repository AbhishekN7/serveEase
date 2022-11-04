const express = require("express");
const { loginUser, loginProfessional } = require("../controllers/authController");


const router = express.Router();


router.post("/user-login", loginUser)
router.post("/professional-login", loginProfessional)

module.exports = router;