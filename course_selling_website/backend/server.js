import express from "express"
const app=express()
import dotenv from "dotenv"
import mongoose from"mongoose"
import admin_route  from "../backend/routes/admin_routes.js"
dotenv.config()

const db_uri=process.env.MONGO_URI

app.use(express.json())


//connect to the db
try {
    mongoose.connect(db_uri)
    console.log("Connected to the data base")
    
} catch (error) {
    console.log(error)
}


app.use('/admin',admin_route)










app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})