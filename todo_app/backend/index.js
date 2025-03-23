import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import userRoutes from "../backend/routes/user_routes.js"
import todo_routes from "../backend/routes/todo_routes.js"
const app=express()
dotenv.config()

app.use(express.json())



//connection to the data base
const DB_URI=process.env.MONGO_URI
try {
    mongoose.connect(DB_URI)
    console.log("Connected to data base succesfully!!!")  
} catch (error) {
    console.log("error in connecting to the data base",error)    
}



app.use('/user',userRoutes)
app.use("/todo",todo_routes)









app.listen(3000,()=>{
    console.log("server is running on port 3000")
})