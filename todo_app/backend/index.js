import express from "express"
import mongoose  from "mongoose";
import todo_routes from "../backend/routes/todo_routes.js"
import user_routes from "../backend/routes/user_routes.js"
const app= express()
import dotenv from "dotenv"
dotenv.config()
const DB_URI=process.env.MANGO_URI;

//connecting to the data base
try {
    mongoose.connect(DB_URI)
    console.log("Data Base Connecteed  Succesfully!!")
    
} catch (error) {
    console.log(`Error in connecting to the Data base ${error}`)   
}

app.use('/todo',todo_routes)
app.use('/user',user_routes)




app.listen(3000,()=>{
    console.log("server is running on port 3000")
})





