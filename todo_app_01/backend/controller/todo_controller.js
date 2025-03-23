import Todo from "../model/todo_schema.js"

export const create_todo=async(req,res)=>{
    try {
        const {title,completed}=req.body
        const todo= new Todo({title,completed})
        const newTodo=await todo.save()
        if (newTodo){
            res.status(200).json({msg:"Todo Created Succesfully !! ",todo:newTodo})
        }
        else{
            res.json({msg:"please give task"})
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"error in creating Todo"})
    }
}


export const  read_todo=async(req,res)=>{
    try {
        const response =await Todo.find()
        res.json({msg:"Todos Fetched Succesfully",response})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Error in fetching Todos from the data base"})  
    }
}


export const update_todo=async(req,res)=>{
    try {
        const updated_todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).json({msg:"todo Upadated Succesfully ",update_todo})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Error in updating Todos from the data base"})     
    }
}


export const delete_todo=async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndDelete(req.params._id)
        res.status(200).json({msg:"Succesfully Delted Todo"})
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"Error in delteig Todos from the data base"})     
    
    }
}