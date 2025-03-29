import Admin from "../models/admin_schema.js";
import z from "zod"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const SECRET=process.env.JWT_SECRET
const adminSchema=z.object({
    email:z.string().email({msg:"invalid email"}),
    password:z.string().min(4,{msg:"password must be more than 4 chars"}),
    firstName:z.string(),
    lastName:z.string()
})

export const signin=async(req,res)=>{
     try {
        const{email,password,firstName,lastName}=req.body
        const validation=adminSchema.safeParse({email,password,firstName,lastName})
        if(!validation.success){
            return res.status(403).json({error:validation.error.errors})
        }
        const user=await Admin.findOne({email})
        if(user){
            res.status(200).json({msg:"Admin Alredy Regestered"})
        }
        else{
            const hash=await bcrypt.hash(password,10)
            const newAdmin= new Admin({email,password:hash,firstName,lastName})
            await newAdmin.save()
            const token=jwt.sign({_id:newAdmin._id,email},SECRET)    
            res.status(200).json({msg:"Admin Regestered Succesfully",token})
        }    
     } catch (error) {   
        console.log(error)
        res.status(400).json({error:"UnSuccesfull in regestering new Admin"})
     }
}

export const verify_admin=(req,res)=>{
    res.json(req.admin.firstName)
}



export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const admin=await Admin.findOne({email})
        if (!admin) {
            return res.status(400).json({
                message: "email or password incorrect",
                success: false,
            });
        }
        const match_password= await bcrypt.compare(password,admin.password)

        if(match_password){
            const token=jwt.sign({email},SECRET)    

            res.status(200).json({msg:"admin Logged in Suucesfull",token})
        }
        else{
            res.json({msg:"admin didnt signed in go sign in first"})
        }
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"unable to login admin "})
    }
}



export const get_all_admin=async (req,res)=>{
    try {
        const user= await Admin.find()
        res.status(200).json({msg:"succesful in fetching admin user",user})
        
    } catch (error) {
        console.log(error)
        res.json({msg:"unable to login the user"})
    }
}

export const clear_all_admin=async(req,res)=>{
    try {
        await Admin.deleteMany()
        res.json({msg:"All  addmin Deleted Succesfully"})
    } catch (error) {
        
        console.log(error)
        res.json({error:"error in deleting the user "})
    }
}