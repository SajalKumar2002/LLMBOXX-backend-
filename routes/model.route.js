const { Router } = require("express");
const {
    displayModel,
    addModel
} = require("../controllers/model.controller");

const ModelRouter = Router();

ModelRouter
    .get("/", displayModel)
    .post("/", addModel)

module.exports = ModelRouter;