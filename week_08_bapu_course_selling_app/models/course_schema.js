import mongoose  from "mongoose";

const ObjectId = mongoose.Types.ObjectId;
const Course_schema =new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageUrl:{type:String},
    creatorId:{type:ObjectId}

})

const Course =mongoose.model("Course",Course_schema)
export default Course