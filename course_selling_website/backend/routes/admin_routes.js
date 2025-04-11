import express from "express"
const   router =express.Router()
import { clear_admin, course, fetchCourse, login, logout, signin, updateCourse } from "../controllers/admin_controller.js"
import adminMiddleware from "../midlware/admin.js"

router.post('/signin',signin)
router.post('/login',login)
router.post('/course' ,adminMiddleware,course)
router.put('/course/update' ,adminMiddleware,updateCourse)
router.get('/course/bulk' ,adminMiddleware,fetchCourse)
router.get('/logout',logout)


export default router