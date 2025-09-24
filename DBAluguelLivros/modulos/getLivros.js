import { book } from "../bookSchma.js";

export async function getLivros(req, res) {
  try {
    const livros = await book.find();
    return res.status(200).send(livros);
  } catch (error) {
    console.error("Erro ao buscar os livros:", error.message);
    return res
      .status(400)
      .send("Erro interno do servidor ao buscar os livros.");
  }
}
