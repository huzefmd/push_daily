import { clear_all_admin, get_all_admin, login, signin, verify_admin } from '../controller/admin_controller.js'
import { authenticateJWT } from '../middleware/auth.js'
import express from "express"
const admin_route =express.Router()

admin_route.post('/signin',signin)
admin_route.get('/me',authenticateJWT,verify_admin)  

admin_route.post('/login',login)
admin_route.get('/fetch',get_all_admin)
admin_route.get('/pop',clear_all_admin)



    
export default admin_route