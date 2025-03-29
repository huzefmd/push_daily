import Course from '../models/course_schema.js'
import express from "express"
const course_route =express.Router()


course_route.post('/purchase',)
course_route.get('/preview',(req,res)=>{
    res.json({msg:"Good night Huzef This are all ur courses"})
})


export default course_route