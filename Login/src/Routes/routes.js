import express from "express";
import { cadastro } from "../Functions/cadastro.js";
import { removeUser } from "../Functions/removeUser.js";
import { login } from "../Functions/login.js";
import { HelloUser } from "../Functions/helloUser.js";
import { AuthMiddleware } from "../Middleware/auth-middleware.js";

export const router = express.Router()

router.post("/cadastro", cadastro)
router.delete("/cadastro/:id", removeUser)
router.post("/login", login)
router.get("/profile",AuthMiddleware, HelloUser)