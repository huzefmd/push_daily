import express from "express"
import {signup, login, logout, search_user, clear_user} from "../controller/user_controller.js"
const router= express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.get('/logout',logout)
router.get('/search',search_user)
router.get('/clear',clear_user)

export default router


