import PromptSync from "prompt-sync";
import express from "express";
const app = express();
const router = express.Router();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
export const prompt = PromptSync({ sigint: true });
// import { gerarBaralho } from "./data.js";
// import { criarBaralho } from "./Baralho/criarBaralho.js";
// import { listarBaralhos } from "./Baralho/listarBaralho.js";
// import { atualizarBaralho } from "./Baralho/atualizarBaralho.js";
// import { deletarBaralho } from "./Baralho/deletarBaralho.js";
// import { criarFlashcard } from "./flashcard/criarFlashcard.js";
// import { listarFlashcards } from "./flashcard/listarFlashcards.js";
// import { listarFlashcardsPorBaralhoId } from "./flashcard/listarFlashcardsPorBaralhoId.js";
// import { atualizarFlashcard } from "./flashcard/atualizarFlashcard.js";
// import { deletarFlashcard } from "./flashcard/deletarFlashcard.js";
// import { buscarFlashcardsPorBaralho } from "./flashcard/buscarFlashcardsPorBaralho.js";
// import { buscarFlashcardsPorPergunta } from "./flashcard/buscarFlashcardsPorPergunta.js";
import { postBaralho } from "./modulos/Baralho/postBaralho.js";
import { getBaralhos } from "./modulos/Baralho/getBaralho.js";
import { putBaralho } from "./modulos/Baralho/putBaralho.js";
import { deleteBaralho } from "./modulos/Baralho/deleteBaralho.js";
router.get("/baralhos", getBaralhos);
router.post("/baralhos", postBaralho);
router.put("/baralhos/:id", putBaralho);
router.delete("/baralhos/:id", deleteBaralho);
router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
