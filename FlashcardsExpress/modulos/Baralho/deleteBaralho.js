import { baralho } from "../../baralhoSchma.js";
import { flashcard } from "../../flashcardSchma.js";

export async function deleteBaralho(req, res) {
  try {
    const { id } = req.params;
    const baralhoExiste = await baralho.findById(id);
    if (!baralhoExiste) {
      return res.status(404).send("Livro nao encontrado!");
    }

   await baralho.findByIdAndDelete(id);

    res.status(200).send("Baralho deletado!");
  } catch (error) {
    console.error("Erro ao deletar o baralho: ", error.message);
    return res.status(500).send("Erro ao deletar o baralho!");
  }
}
