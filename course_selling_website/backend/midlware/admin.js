import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const admin_secret=process.env.admin_secret

const adminMiddleware=(req,res,nxt)=>{
    try {
        const token =req.headers.token
        if(!token){
            return res.status(400).json({error:"Acces Denied No token Provided"})
        }
        const decode=jwt.verify(token,admin_secret)
        console.log("Decoded Token:", decode);
        req.adminId=decode.id
        nxt()
    } catch (error) {
        console.log("Token Verification Error",error.message)
        res.status(403).json({error:"invalid or expired Token"})
    }

}

export default adminMiddleware