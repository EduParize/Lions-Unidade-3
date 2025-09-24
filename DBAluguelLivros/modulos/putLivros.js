import { readData, writeData } from "./fileUtils.js";
import { book } from "../bookSchma.js";
export async function putLivros(req, res) {
  try {
    const { id } = req.params;
    const { title, author, year, genre } = req.body;
    const livroExiste = await book.findById(id);
    if (!livroExiste) {
      return res.status(404).json({ message: "LIvro nao encontrado" });
    }
    const livroAtualizado = await book.findByIdAndUpdate(
      id,
      { title, author, year, genre },
      { new: true, runValidators: true }
    );
    return res.status(200).json(livroAtualizado)
  } catch (error) {
    console.error("Erro ao atualizar o livro: ", error.message);
    return res.status(500).json({ message: "Erro interno do servidor ao atualizar o livro." });
  }
}
