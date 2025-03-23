import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import user_route from "../backend/routes/user_routes.js"
import todo_route from "../backend/routes/todo_routes.js"
dotenv.config()
const app=express()

const db_uri=process.env.MONGO_URI
//midllewares
app.use(express.json())


//connect to the data base
try {
    mongoose.connect(db_uri)
    console.log("Connected To the Data Base!!!!")
} catch (error) {
    console.log("Error in Connecting To The Data Base ",error)
}


//calling routes
app.use('/user',user_route)
app.use('/todo',todo_route)


app.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000")
})