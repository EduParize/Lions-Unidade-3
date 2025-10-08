import { pet } from "../schema/schemaPet.js";

export async function putPets(req, res) {
  try {
    const { id } = req.params;
    const { nome, especie, idade, status } = req.body;

    const existePet = await pet.findById(id);
    if (!existePet) {
      res.status(400).send("Pet nao encontrado com esse ID.");
    }
    const novoPet = await pet.findByIdAndUpdate(
      id,
      { nome, especie, idade, status },
      { new: true, runValidators: true }
    );
    res.status(200).send("Pet atualizado com sucesso!");
  } catch (error) {
    console.error("Erro interno no sistema", error.message);
    throw error;
  }
}
