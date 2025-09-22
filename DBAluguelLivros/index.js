import express from "express";
import mongoose from "mongoose";
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://eduardoparize05_db_user:paraizopalmeiras123@db-baralhos.cigxjam.mongodb.net/?retryWrites=true&w=majority&appName=db-baralhos")

mongoose.connection.once("open", ()=>{
  console.log("Conectado ao MongoDB ")
})
mongoose.connection?.on('error', (err)=>{
  console.error(`Error to connect - MongoDB: Error: ${err.message}`)
})


import { postLivros } from "./modulos/postLivros.js";
import { getLivros } from "./modulos/getLivros.js";
import { postAluno } from "./modulos/postAluno.js";
import { getAluno } from "./modulos/getAlunos.js";
import { getAluguel } from "./modulos/getAluguel.js";
import { postAluguel } from "./modulos/postAluguel.js";
import { putAlunos } from "./modulos/putAlunos.js";
import { deleteAlunos } from "./modulos/deleteAlunos.js";
import { putLivros } from "./modulos/putLivros.js";
import { deleteLivros } from "./modulos/deleteLivros.js";
import { putAluguel } from "./modulos/putAluguel.js";
import { deleteAlguel } from "./modulos/deleteAluguel.js";
import { getBuscarLivros } from "./modulos/getBuscaLivro.js";
import { getBuscarAluno } from "./modulos/getBuscaAluno.js";
import { getBuscarAluguel } from "./modulos/getBuscaAluguel.js";

router.post("/livros", postLivros);
router.get("/livros", getLivros);
router.post("/alunos", postAluno);
router.get("/alunos", getAluno);
router.post("/aluguel", postAluguel);
router.get("/aluguel", getAluguel);
router.put("/alunos/:id", putAlunos);
router.delete("/alunos/:id", deleteAlunos);
router.put("/livros/:id", putLivros);
router.delete("/livros/:id", deleteLivros);
router.put("/aluguel/:id", putAluguel)
router.delete("/aluguel/:id", deleteAlguel)
router.get("/livros/buscar", getBuscarLivros)
router.get("/alunos/buscar", getBuscarAluno)
router.get("/aluguel/buscar", getBuscarAluguel)

router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
