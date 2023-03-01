const mongoose=require("mongoose");
const jobSchema=mongoose.Schema({
    title:String,
    posting_date:Date,
    location:String,
    description:String,
    type:String,
    
})
const JobModel=mongoose.model("reduxjob",jobSchema);
module.exports=JobModel;