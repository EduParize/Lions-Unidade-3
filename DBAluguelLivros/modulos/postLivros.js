import { readData, writeData } from "./fileUtils.js";
import { book } from "../bookSchma.js";

export async function postLivros(req, res) {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    res
      .status(400)
      .send("Informacoes incompletas, por favor insira novamente!");
  }
  const novoLivro = new book({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
  });
  try {
    const salvarLivro = await novoLivro.save();
    res.status(200).send("LIvro criado com sucesso!", salvarLivro)
  } catch (error) {
    console.error("Erro ao criar o livro: ", error.message)
    throw error;
  }
}
