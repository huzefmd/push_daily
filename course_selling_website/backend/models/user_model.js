import mongoose  from "mongoose"

const User_schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
    purchasedCourse:[{type:mongoose.Schema.Types.ObjectId,ref:"Course"}],
})


const User=mongoose.model("User",User_schema)
export default User