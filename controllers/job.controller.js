const Job = require("../SQLmodel/job.model");
const User = require('../SQLmodel/user.model');

const displayJobDetails = async (req, res) => {
    try {
        // const job_details = await Job.find();
        res.status(201).send("job_details")
    } catch (error) {
        console.error(error);
        res.send({ success: false, message: "Service error" })
    }
}

const generateJob = async (req, res) => {
    try {
        // const newJob = new Job();
        // const job = await newJob.save();

        // const { usertoken } = req.cookies;
        // const user = jwt.verify(usertoken, process.env.JWT_TOKEN)
        // const existUser = await UserModel.findOne({ email: user })
        //     (existUser.jobID).push(job.job_id);
        res.status(200).send("job");
    } catch (error) {
        console.error(error);
        res.send({ success: false, message: "Service error" })
    }
}

module.exports = {
    displayJobDetails,
    generateJob
};