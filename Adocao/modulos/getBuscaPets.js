import { pet } from "../schema/schemaPet.js";

export async function getBuscaPets(req, res) {
  const { especie, status } = req.query;
  const query = {};

  if (especie) {
    query.especie = especie;
  }
  if (status) {
    query.status = status;
  }
  try {
    const listaBuscaPets = await pet.find(query);
    if (!listaBuscaPets || listaBuscaPets.length == 0) {
      return res.status(400).send("Nenhum pet encontrado com esses parametros");
    }
    return res.status(200).send(listaBuscaPets);
  } catch (error) {
    console.error("Erro ao buscar as movimentacoes", error.message);
    res.status(500).send("Erro interno ao buscar o historico.");
    throw error;
  }
}
