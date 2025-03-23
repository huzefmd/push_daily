import mongoose, { Schema } from "mongoose"

const todo_scema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    completed:{
        type:String,
        required:true
    }
})


const Todo= mongoose.model("Todo",todo_scema)
export default Todo