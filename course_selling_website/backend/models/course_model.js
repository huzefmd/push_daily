import mongoose  from "mongoose"

const Course_scema = new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    price:{type:Number},
    imageLink:{type:String},
    published:{type:Boolean},
})


const Course=mongoose.model("Course",Course_scema)

export default Course