import express from "express"
const   router =express.Router()
import { clear_admin, login, logout, signin } from "../controllers/admin_controller.js"

router.post('/signin',signin)
router.post('/login',login)
router.get('/clear',clear_admin)
router.get('/logout',logout)


export default router