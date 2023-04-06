const express = require("express");

const { AllJob,SingleJob,EmployerJob,ApplyJobs,DeleteJob } = require("../Controllers/Get");
const {PostJob, ApplyJob}=require("../Controllers/Post");

const jobRoute=express.Router();
jobRoute.get("/",AllJob);
jobRoute.get("/singlejob/:id",SingleJob);
jobRoute.post("/postjob",PostJob);
jobRoute.post("/applyjob",ApplyJob);
jobRoute.get("/employerjobs",EmployerJob);
jobRoute.get("/apply/job/:id",ApplyJobs);
jobRoute.delete("/delete/:id",DeleteJob);
module.exports=jobRoute;