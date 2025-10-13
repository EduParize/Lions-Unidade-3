import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const router = express.Router();
const port = 3000;
("");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dbNome = "petAdocao";
mongoose.connect(process.env.banco);

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
import { postFigurinha } from "./modules/postFigurinha.js";
import { putFigurinha } from "./modules/putFigurinha.js";
import { deleteFigurinha } from "./modules/deleteFigurinha.js";

router.post("/figurinha", postFigurinha);
router.put("/figurinha/:id", putFigurinha);
router.delete("/figurinha/:id", deleteFigurinha)
