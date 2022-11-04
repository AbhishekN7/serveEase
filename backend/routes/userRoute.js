const express = require("express");
const { getAllUsers, getSingleUser, updateUser, deleteSingleUser, deleteAllUsers, addUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/register", addUser);
router.get("/:userId", getSingleUser);
router.put("/:userId", updateUser);
router.delete("/destroy", deleteAllUsers);
router.delete("/:userId", deleteSingleUser);

module.exports = router;