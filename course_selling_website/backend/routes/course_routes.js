import express from "express";
const router = express.Router();
import {userMiddleware}  from "../midlware/user.js"
import { purchaseCourse,preview } from "../controllers/course-countroller.js";

router.post("/purchase",userMiddleware, purchaseCourse);
router.get("/preview", preview);

export default router;
