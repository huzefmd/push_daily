import express from "express"
import { login, logout, signin,purchases } from "../controllers/user_controller.js"
import userMiddleware from "../midlware/user.js"
const   router =express.Router()

router.post('/signin',signin)
router.post('/login',login)
router.get('/logout',logout)
router.get('/purchases',userMiddleware,purchases)


export default router