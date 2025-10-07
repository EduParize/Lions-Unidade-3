import mongoose from "mongoose";
import express from "express";
const app = express();
const router = express.Router();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbNome = 'Estoque'
mongoose.connect(
  `mongodb+srv://eduardoparize05_db_user:paraizopalmeiras123@db-baralhos.cigxjam.mongodb.net/${dbNome}`
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB ");
});
mongoose.connection?.on("error", (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`);
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
import { postProduto } from "./modulos/postProdutos.js";
import { postMovimentacao } from "./modulos/postMovimentacao.js";
import { getHistorico } from "./modulos/getHistorico.js";

router.post("/produtos", postProduto)
router.post("/produtos/:id/:tipo", postMovimentacao)
router.get("/produtos/:id/historico", getHistorico)
