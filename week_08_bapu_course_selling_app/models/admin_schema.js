import mongoose  from "mongoose";

const Admin_schema =new mongoose.Schema({
    email:{type:String,unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}
})

const Admin =mongoose.model("User",Admin_schema)
export default Admin 