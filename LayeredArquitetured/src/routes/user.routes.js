import { Router } from "express";
import userController from "../controllers/user.controller.js"
import { ensureValidId } from "../middlewares/validate.middlaware.js";

const router = Router()

router.post("/user", userController.userCreate)

export default router