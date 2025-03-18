import express from "express"
import {create_todo, fetch_todo, remove_todo} from "../controller/todo_controller.js"
const router= express.Router()

router.post('/create',create_todo)
router.get('/fetch',fetch_todo)
router.delete('/remove',remove_todo)

export default router








