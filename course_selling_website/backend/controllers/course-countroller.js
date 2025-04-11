import Course from "../models/course_model.js"
import Purchase from "../models/purchase_model.js"
export const purchaseCourse=async(req,res)=>{
    const userId=req.userId
    const courseId=req.body.courseId
    const purchase=await Purchase.create({userId,courseId})
    res.json({msg:"Course Purchased Succesfully",purchase})
}


export const preview=async(req,res)=>{
    const courses=await Course.find()
    res.json({courses})
}
