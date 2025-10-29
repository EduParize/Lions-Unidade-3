import express from "express";
import { cadastro } from "../Functions/cadastro.js";
import { removeUser } from "../Functions/removeUser.js";

export const router = express.Router()

router.post("/cadastro", cadastro)
router.post("/cadastro/:id", removeUser)