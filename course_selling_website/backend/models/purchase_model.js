import mongoose  from "mongoose";
const ObjectId=mongoose.Types.ObjectId;

const purchase_schema=new mongoose.Schema({
    userId:{type:ObjectId},
    courseId:{type:ObjectId},
})
const Purchase=mongoose.model("Purchase",purchase_schema)
export default Purchase