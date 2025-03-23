import express from "express"
import { clear_todo, create_todo,delete_to_by_id,fetch_todos, update_todo } from "../controller/todo_controller.js"
const router =express.Router()

router .post("/create",create_todo)
router.get("/fetch",fetch_todos)
router.put("/update/:id",   update_todo)
router.get("/delete",clear_todo)
router.delete('/remove',delete_to_by_id)    

export default router