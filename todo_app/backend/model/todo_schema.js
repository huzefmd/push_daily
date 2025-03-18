import mongoose  from "mongoose"


const todo_schem= mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    }
})


const Todo =mongoose.model("Todo",todo_schem)
export default Todo