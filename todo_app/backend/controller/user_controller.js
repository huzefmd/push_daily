import User from "../model/user_scema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const jwt_secret = "i_love_srk";

// ✅ Sign-In Function
export const signin = async (req, res) => {
    try {
        const {username,email,number,password}=req.body
        const user=await User.findOne({email})
        if(user){
            return res.json({msg:"User alredy Signed in ",user})
        }
        const newUser= new User({username,email,number,password})
        await newUser.save()
        if(newUser){
            return res.status(200).json({msg:"User Succesfully Signed in ",newUser})
        }

    } catch (error) {
       console.log(error)
       res.status(400).json({error:"error in Signing the user"}) 
    }
};

export const login =async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await User.findOne({email,password})
        if(user){
            
            return res.status(200).json({msg:"User Suucesfully Logeed in",user})
        }
        else{
            return res.json({msg:"User didnt signed in please signin"})
        }
        
    } catch (error) {
        console.log(err)
        res.status(400).json({error:"error in loging user",error})
        
    }
    
}




// ✅ Fetch Users Function
export const getUser = async (req, res) => {
    try {
        const all_user=await User.find()
        res.json({msg:"all User fteched Succesfully",all_user})
        
    } catch (error) {
        console.log(error)
        req.status(400).json({error:"error in fteching user from the db"})
        
    }  
};


export const clear=async(req,res)=>{
     try {
        await  User.deleteMany()
        res.status(200).json({msg:"Every User From the data base is Deleted ",user:User})
     } catch (error) {
        console.log(error)
        res.status(400).json({error:"error in delteing all user"})
     }
    
}