import express from "express"
import mongoose  from "mongoose"
import dotenv  from "dotenv"
import course_route from "./routes/course.js"
import admin_route from "./routes/admin.js"
import user_route from "./routes/user.js"
dotenv.config()
const db_uri=process.env.MONGO_URI
const app= express()


//middleware 
app.use(express.json())


//connect to the db     
try {
    mongoose.connect(db_uri)
    console.log("DATA BASE CONNECTED SUCCESFULLY ")   
} catch (error) {
    console.log(Error)
}


app.use('/courses',course_route)
app.use('/user',user_route)
app.use('/admin',admin_route)





app.listen(3000,()=>{
    console.log("Server is running on  port http://localhost:3000/")
})