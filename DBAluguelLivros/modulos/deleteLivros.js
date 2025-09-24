import { book } from "../bookSchma.js";
export async function deleteLivros(req, res) {
  try {
    const { id } = req.params;
    const livroExiste = await book.findById(id);
    if (!livroExiste) {
      return res.status(404).json({ message: "Livro nao encontrado" });
    }
    const livroDeletado = await book.findByIdAndDelete(id);
    return res.status(200).send("Livro deletado!");
  } catch (error) {
    console.error("Erro ao atualizar o livro: ", error.message);
    return res
      .status(500)
      .json({ message: "Erro interno do servidor ao deletar o livro." });
  }
}
