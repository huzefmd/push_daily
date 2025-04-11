import mongoose  from "mongoose"
const ObjectId = mongoose.Types.ObjectId;

const Course_scema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageUrl:{type:String},
    creatorId:{type:ObjectId},
})


const Course=mongoose.model("Course",Course_scema)

export default Course