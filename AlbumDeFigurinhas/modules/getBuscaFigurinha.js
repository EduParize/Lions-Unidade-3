import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function getBuscaFigurinha(req, res) {
  const { numero, tema } = req.query;
  const query = {};

  if (numero) {
    query = query.numero;
  }
  if (tema) {
    query = query.tema;
  }
  try {
    const figurinhasFiltrada = await figurinha.find(query);
    if (!figurinhasFiltrada || figurinhasFiltrada.length == 0) {
      return res
        .status(400)
        .send("Nenhuma figurinha encontrada com esses parametros.");
    }
    return res.status(200).send(figurinhasFiltrada);
  } catch (error) {
    console.error("Erro interno no servidor", error.message);
    throw error;
  }
}
