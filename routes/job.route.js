const { Router } = require("express");
const {
    displayJobDetails,
    generateJob
} = require("../controllers/job.controller");

const JobsRouter = Router();

JobsRouter
    .get("/", displayJobDetails)
    .get("/generate", generateJob)

module.exports = JobsRouter;