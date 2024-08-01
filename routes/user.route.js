const { Router } = require("express");

const {
    display,

    registerUser,
    loginUser,
    logoutUser,
    sendIsUser,
    deleteUser
} = require("../controllers/user.controller");

const {
    getAccessToRoute
} = require('../middleware/authentication.Middleware')

const UserRouter = Router();

UserRouter.get("/", display);

UserRouter
    .post("/register", registerUser)
    .post("/login", loginUser)
    .delete("/", deleteUser)
    .get("/logout", getAccessToRoute, logoutUser)
    .get("/check", getAccessToRoute, sendIsUser)

module.exports = UserRouter;