// const UserModel = require("../Models/User.model");
const ApplyModel = require("../Models/Apply.model");
const JobModel = require("../Models/Job.model");

const AllJob=async(req,res)=>{
    try {
        let alljob=await JobModel.find();
        res.status(200).send({data:alljob})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get jobs" })
    }
}

const SingleJob=async(req,res)=>{
    try {
        let jobID=req.params.id;
        console.log(jobID)
        let singleJob=await JobModel.findById(jobID);
        res.status(200).send({data:singleJob})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get job" })
    }
}

const EmployerJob=async(req,res)=>{
    try {
        let alljobsforemployer=await JobModel.find({userID:req.body.userID});
        res.status(200).send({data:alljobsforemployer})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get job" })
    }
}
const ApplyJobs=async(req,res)=>{
    try {
        const id=req.params.id
        let apply=await ApplyModel.find({jobID:id});
        res.status(200).send({data:apply})
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "Failed to get job" })
    }
}
module.exports={AllJob,SingleJob,EmployerJob,ApplyJobs}