import mongoode from "mongoose"

const todo_schema= new mongoode.Schema({
    text:{type:String,
        required:true},
    completed:{type:Boolean,required:true}
})

const Todo=mongoode.model("Todo",todo_schema)
export default Todo