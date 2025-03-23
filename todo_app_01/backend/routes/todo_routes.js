import express from "express"
import { create_todo, delete_todo, read_todo, update_todo } from "../controller/todo_controller.js" 
const router = express.Router()

router.post('/create',create_todo)
router.get('/fetch_todo',read_todo)
router.put('/update/:id',update_todo)
router.delete('/pop/:id',delete_todo)


export default router