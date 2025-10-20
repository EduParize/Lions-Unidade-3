import express from "express"
import { AddUser } from "../Functions/AddUser.js";
import { RemoveUser } from "../Functions/RemoverUser.js";
import {loginUser} from "../Functions/LoginUser.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";
import {HelloUser} from "../Functions/GetUser.js"

export const router = express.Router();

router.post("/Cadastro", AddUser)
router.delete("/Cadastro/:id", RemoveUser)
router.post("/login", loginUser)
router.get("/profile",authMiddleware, HelloUser )

