import Admin from "../models/admin_model.js";
import z from "zod";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import Course from "../models/course_model.js";
import mongoose from "mongoose";
dotenv.config()
const admin_secret=process.env.admin_secret

const admin_auth = z.object({
  username: z.string().min(1).max(50).email(),
  password: z
    .string()
    .min(8, "password must be atleast 8 charcters")
    .max(50, "password must be contain at max 50 characters")
});

export const signin = async (req, res) => {
  try {
    const {username,password}=req.body
    // const parseInput=admin_auth.safeParse({username,password})
    // if(!parseInput.success){
    //     res.status(411).json({msg:parseInput.error.issues[1].msg})
    // }
    // const username=parseInput.data.username
    // const password=parseInput.data.password
    const user=await Admin.findOne({username,password})
    if(user){
        res.status(200).json({msg:"Admin Alredy Regesterd"})
    }
    const newUser= new Admin({username,password})
    await newUser.save()
    res.json({msg:"Admin Created Succesfully"})
  } catch (error) {
    console.log(error)
    res.status(400).json({error:"Error in Creating Admin"})
  }
};

  export const login = async (req, res) => {
    try {
      const {username,password}=req.body
      const user=await Admin.findOne({username,password})
      if(user){
          const token=jwt.sign({id:user._id},admin_secret)
          res.status(200).json({msg:"Admin Logined succesfully",token})
      }
      } catch (error) {
          console.log(error)
          res.status(400).json({error:"Unable to login admin"})
      }
  };

export const course =async(req,res)=>{
  const adminId=req.adminId
  const {   
    title,
    description,
    price,
    imageUrl,
    }=req.body

  const newcourse=await new Course({ title,description,price,imageUrl,creatorId:adminId})
  await newcourse.save()
  res.json({msg:"Course Created",courseId:newcourse._id})
}

export const updateCourse=async (req,res)=>{
  const adminId=req.adminId
  const {  title,description,price,imageUrl,courseId}=req.body
  const course=await Course.updateOne({
    _id:courseId,
    creatorId:adminId
  },
  {
    title,
    description,
    price,
    imageUrl
  })
  res.json({msg:"Courses Updated Suucesfully",courseId:course._id})
}

export const fetchCourse=async(req,res)=>{
  try {
    const adminId=req.adminId
    if(!adminId){
      return res.status(403).json({msg:"Admin Id is Required"})
    }
    const courses=await Course.find({creatorId:adminId})
    res.status(200).json({msg:"Courses Fetched Succesfully",courses})
    
  } catch (error) {
    console.log("error in fetching course",error)
    res.status(500).json({msg:"Internal server error"})
  }
}


export const logout=async (req,res)=>{
  try {
    await Admin.findByIdAndDelete()
    res.status(200).json({msg:"Succesfully Logout"})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({error:"Unsuccesfull in loging out the user"})

    
  }
}

export const clear_admin=async (req,res)=>{
  try {
    await Admin.deleteMany()
    res.status(200).json({msg:"Every User in The Data base is Delted"})
  } catch (error) {
    console.log(error)
    res.status(400).json({error:"error in deliting User from the db"}) 
  }
}