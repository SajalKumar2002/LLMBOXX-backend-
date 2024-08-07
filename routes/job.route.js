const { Router } = require("express");
const {
    displayJobDetails,
    generateJob,
} = require("../controllers/job.controller");

const {
    getAccessToRoute
} = require('../middleware/authentication.Middleware')

const JobsRouter = Router();

JobsRouter
    .get("/",  displayJobDetails)
    .get("/generate", generateJob)

module.exports = JobsRouter;