import mongoose  from "mongoose"

const Admin_schema = new mongoose.Schema({
    username:{type:String},
    password:{type:String},
})


const Admin=mongoose.model("Admin",Admin_schema)

export default Admin