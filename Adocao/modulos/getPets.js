import { pet } from "../schema/schemaPet.js";

export async function getPets(req, res) {
  try {
    const petsLista = await pet.find();
    if (!petsLista || petsLista.length == 0) {
      return res.status(400).send("Nenhum pet cadastrado no sistema.");
    }
    return res.status(200).send(petsLista);
  } catch (error) {
    console.error("Erro ao buscar as movimentacoes", error.message);
    res.status(500).send("Erro interno ao buscar o historico.");
    throw error;
  }
}
