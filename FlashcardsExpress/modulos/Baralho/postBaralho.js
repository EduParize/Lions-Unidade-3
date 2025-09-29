import { baralho } from "../../baralhoSchma.js";

export async function postBaralho(req, res) {
  const { nomeBaralho } = req.body;

  if (!nomeBaralho) {
    res.status(400).send("Informaçoes incompletas, insira novamente!");
  }
  const novoBaralho = new baralho({
    nomeBaralho: req.body.nomeBaralho,
  });
  try {
    const salvaBaralho = await novoBaralho.save();
    res.status(200).send(`Baralho "${nomeBaralho}" criado com sucesso!`, salvaBaralho);
  } catch (error) {
    console.error("Erro ao criar o baralho: ", error.message);
    throw error;
  }
}
