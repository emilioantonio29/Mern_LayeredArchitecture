const express = require("express")
const {Router} = express
const router = new Router()
const {getAllUsers, getUserById, createUser, deleteUser, deleteAll} = require("../controllers/userController")

router.get("/users", getAllUsers)
router.get("/user/:id", getUserById)
router.post("/users", createUser)
router.delete("/user/:id", deleteUser)
router.delete("/users", deleteAll)

module.exports = router