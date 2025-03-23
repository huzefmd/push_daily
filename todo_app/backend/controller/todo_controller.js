import Todo from "../model/todo_schema.js"


export const create_todo=async(req,res)=>{

    const todo= new Todo({
        text:req.body.text,
        completed:req.body.completed
    })
    try {
        const newTodo= await todo.save()
        res.status(200).json({msg:"todo created suucesfully",newTodo})
    } catch(err) {
        console.log(err)
        res.status(400).json({error:"Server Error"})
    }
}

export const fetch_todos=async(req,res)=>{
    try {
        const todos=await  Todo.find()
        res.json({msg:"todos fetched succesfully",todos:todos})
        
    } catch (error) {
        console.log(error)
        res.status(400).json({error:"failed to fetch all todos from the data base"})
   
    }
}

export const clear_todo=async(req,res)=>{
    try {
         await Todo.deleteMany()
        res.status(200).json({msg:"every todo in the data base deleted Sucesfully"})
        
    } catch (error) {
        res.status(400).json({error:"error in deleting todos"})
        
    }
}

export const update_todo=async(req,res)=>{
    try {
        const todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{
            new :true
        })
        res.status(200).json({msg:"todo updated succesfullly"})
        
    } catch (error) {
        res.status(400).json({error:"error in updating todo"})
    }
}

export const delete_to_by_id=async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({msg:"Succesfully Delted todo of the id given"})
    }
    catch(err){
        res.json({msg:"error in delteing Todo of the specified id"})
    }
}