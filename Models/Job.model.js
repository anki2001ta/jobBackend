const mongoose=require("mongoose");
const jobSchema=mongoose.Schema({
    title:String,
    posting_date:String,
    location:String,
    description:String,
    type:String,
    userID:String
})
const JobModel=mongoose.model("reduxjob",jobSchema);
module.exports=JobModel;