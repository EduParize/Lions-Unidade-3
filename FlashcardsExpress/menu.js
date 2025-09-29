import mongoose from "mongoose";
import express from "express";
const app = express();
const router = express.Router();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://eduardoparize05_db_user:paraizopalmeiras123@flashcards.cigxjam.mongodb.net/?retryWrites=true&w=majority&appName=flashcards"
);

mongoose.connection.once("open", () => {
  console.log("Conectado ao MongoDB ");
});
mongoose.connection?.on("error", (err) => {
  console.error(`Error to connect - MongoDB: Error: ${err.message}`);
});
import { postBaralho } from "./modulos/Baralho/postBaralho.js";
import { getBaralhos } from "./modulos/Baralho/getBaralho.js";
import { putBaralho } from "./modulos/Baralho/putBaralho.js";
import { deleteBaralho } from "./modulos/Baralho/deleteBaralho.js";
import { postFlashcard } from "./modulos/flashcard/postFlashcard.js";
router.get("/baralhos", getBaralhos);
router.post("/baralhos", postBaralho);
router.put("/baralhos/:id", putBaralho);
router.delete("/baralhos/:id", deleteBaralho);
router.post("/flashcards", postFlashcard);
router.get("/", (req, res) => {
  res.send("API funcionando!");
});
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
