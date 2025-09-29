import { baralho } from "../../baralhoSchma.js";

export async function putBaralho(req, res) {
  try {
    const { id } = req.params;
    const { nomeBaralho } = req.body;

    const baralhoExiste = await baralho.findById(id);
    if (!baralhoExiste) {
      return res.status(404).send("Livro nao encontrado!");
    }
    const baralhoAtualizado = await baralho.findByIdAndUpdate(
      id,
      { nomeBaralho },
      { new: true, runValidators: true }
    );
    res.status(200).send(`Baralho atualizado para ${req.body.nomeBaralho}`);
  } catch (error) {
    console.error("Erro ao ataulizar o baralho: ", error.message);
    return res
      .status(400)
      .send("Erro interno do servidor ao atualizar o baralho.");
  }
}
