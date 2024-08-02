const Job = require("../SQLmodel/job.model");

const displayJobDetails = async (req, res) => {
    try {
        const job_details = await Job.findAll({ where: { userid: req.user.id } });
        res.status(201).send({ success: true, job_details })
    } catch (error) {
        // console.error(error);
        res.send({ success: false, message: "Service Error", error })
    }
}

const generateJob = async (req, res) => {
    try {
        const newJob = await Job.create({
            userid: req.user.id,

        })
        res.send({ success: true, job: { ...newJob } })
    } catch (error) {
        // console.error(error);
        res.send({ success: false, message: "Service Error", error })
    }
}

module.exports = {
    displayJobDetails,
    generateJob
};