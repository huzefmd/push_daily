import express from "express"
import { fetch_user, login, remove_user, signin } from "../controller/user_controller.js"
const router = express.Router()

router.post('/signin',signin)
router.post('/login',login)
router.get("/clear",remove_user)
router.get("/fetch",fetch_user)




export default router
