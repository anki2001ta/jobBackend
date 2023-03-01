const mongoose=require("mongoose");
const userSchema=mongoose.Schema({

    name:String,

    email:String,

    password:String,
    role:String
})
const UserModel=mongoose.model("reduxuser",userSchema);
module.exports=UserModel;