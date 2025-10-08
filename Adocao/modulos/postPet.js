import { pet } from "../schema/schemaPet.js";

export async function postPet(req, res) {
  const { nome, especie, idade, status } = req.body;

  const adicionarPet = new pet({
    nome,
    especie,
    idade,
    status,
  });
  if (status != "disponivel" && status != "indisponivel") {
    return res
      .status(400)
      .send("Status incorretos, insira 'disponivel' ou 'indisponivel'");
  }
  try {
    const salvarPet = await adicionarPet.save();
    res.status(200).send(`Pet ${nome} adicionar com sucesso!`, salvarPet);
  } catch (error) {
    console.error("Erro ao criar um novo pet.", error.message);
    throw error;
  }
}
