import Admin from "../models/admin_model.js";
import z from "zod";
import jwt from "jsonwebtoken";
const admin_secret="fjhjdhkfjhdka"

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
        res.status(403).json({msg:"Admin Alredy Regesterd"})
    }
    const newUser=await new Admin({username,password})
    await newUser.save()
    const token=jwt.sign({username,role:"admin"},admin_secret,{expiresIn:"1hr"})
    res.json({msg:"Admin Created Succesfully",token})
  } catch (error) {
    console.log(error)
    res.status(400).json({error:"Error in Creating Admin"})
  }
};

export const login = async (req, res) => {
    try {
        const {username,password}=req.body
        const user=Admin.findOne({username,password})
        if(user){
            const token=jwt.sign({username},admin_secret)
            res.status(200).json({msg:"Admin Logined succesfully",token})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Unable to login admin"})
    }
};
