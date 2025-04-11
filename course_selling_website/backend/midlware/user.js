import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
const user_jwt_secret=process.env.user_jwt_secret

export const userMiddleware=(req,res,nxt)=>{
    try {
        const token =req.headers.token
        if(!token){
            return res.status(400).json({error:"Acces Denied No token Provided"})
        }
        const decode=jwt.verify(token,user_jwt_secret)
        console.log("Decoded Token:", decode);
        req.userId=decode.id
        nxt()
    } catch (error) {
        console.log("Token Verification Error",error.message)
        res.status(403).json({error:"invalid or expired Token"})
    }

}
export default userMiddleware