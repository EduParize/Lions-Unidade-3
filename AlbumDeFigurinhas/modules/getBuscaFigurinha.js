import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function getBuscaFigurinha(req, res) {
  const { nome, numero, tema } = req.query;
  const query = {};
  if (nome) {
    query.nome =  { $regex: new RegExp(nome, 'i') };
  }
  if (numero) {
    query.numero = numero;
  }
  if (tema) {
    query.tema = { $regex: new RegExp(tema, 'i') };;
  }
  try {
    const figurinhasFiltrada = await figurinha.find(query);
    if (!figurinhasFiltrada || figurinhasFiltrada.length == 0) {
      return res
        .status(404)
        .send("Nenhuma figurinha encontrada com esses parametros.");
    }
    return res.status(200).send(figurinhasFiltrada);
  } catch (error) {
    console.error("Erro interno no servidor", error.message);
    throw error;
  }
}
