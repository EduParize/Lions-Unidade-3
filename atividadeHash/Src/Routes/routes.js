import express from "express";
import { AddUser } from "../Functions/User/AddUser.js";
import { loginUser } from "../Functions/Login/LoginUser.js";
import { HelloUser } from "../Functions/Login/GetUser.js";
import { RemoveUser } from "../Functions/User/RemoverUser.js";
import { AuthMiddleware, Role } from "../Middlewares/auth-middleware.js";

export const router = express.Router();

router.post("/Cadastro", AddUser);
router.delete("/Cadastro/:id", RemoveUser);
router.post("/login", loginUser);
router.get("/profile", AuthMiddleware(Role.ADMIN), HelloUser);
