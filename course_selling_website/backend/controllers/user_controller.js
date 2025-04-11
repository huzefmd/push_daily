import User from "../models/user_model.js"
import Purchase from "../models/purchase_model.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import Course from "../models/course_model.js"
dotenv.config()
const user_jwt_secret=process.env.user_jwt_secret

export const signin=async(req,res)=>{
    try {
        const{username,password}=req.body
        const user=await User.findOne({username,password})
        if(user){
            res.status(200).json({msg:"Alredy User Signed In"})
        }
        const newUser=  new User({username,password})
        await newUser.save()
        if(newUser){
            res.status(200).json({msg:"User Signed In Succesfully"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Error in Creating User"})
    }
}

export const login = async (req, res) => {
    try {
        const {username,password}=req.body
        const user=await User.findOne({username,password})
        if(user){
            const token =jwt.sign({id:user._id},user_jwt_secret)
            res.json({msg:"User Logged in Succesfully",token})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Unable to login admin"})
    }
};

export const logout=async (req,res)=>{
  try {
    await User.findByIdAndDelete()
    res.status(200).json({msg:"Succesfully Logout"})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({error:"Unsuccesfull in loging out the user"})

    
  }
}

export const purchases=async (req,res)=>{
    const userId=req.userId
    if(!userId){
        return res.status(400).json({error:"User not found"})
    }
    const purchases=await Purchase.find({userId})
    
    const course_data=await Course.find({
        _id:{$in:purchases.map(x=>x.courseId)}
    });
    res.json({purchases,course_data})
    
}