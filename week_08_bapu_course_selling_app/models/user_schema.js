import mongoose  from "mongoose";

const User_schema =new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}
})

const User =mongoose.model("User",User_schema)
export default User