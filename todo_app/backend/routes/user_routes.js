import express from "express"
import { getUser, login, signin ,clear } from "../controller/user_controller.js"
const router= express.Router()

router.post('/signin',signin)
router.get("/getUser",getUser)
router.post('/login',login)
router.get('/clear',clear)


export default router

