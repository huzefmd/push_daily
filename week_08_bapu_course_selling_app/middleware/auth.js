import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const SECRET = process.env.JWT_SECRET;

export const authenticateJWT = (req, res, nxt) => {
  try {
    const auth_header   = req.headers.authorization;
    if (!auth_header) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }
    const token=auth_header.split(" ")[1]
        jwt.verify(token,SECRET,(err,admin)=>{
          if(err){
            return res.status(403).json({error:"Invalid or expired token"})
          }
        })
        req.admin=admin
        nxt()
  } catch (error) {
    console.log(error)
    res.status(403).json({error:"Error in Authenticating"})
  }
};
