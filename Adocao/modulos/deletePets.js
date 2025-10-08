import { pet } from "../schema/schemaPet.js";

export async function deletePet(req, res) {
  const { id } = req.params;
  try {
    const existePet = await pet.findById(id);
    if (!existePet) {
      res.status(400).send("Pet nao encontrado com esse ID.");
    }
    await pet.findByIdAndDelete(id);
    res.status(200).send("Pet deletado com sucesso");
  } catch (error) {
    console.error("Erro interno no sistema", error.message);
    throw error;
  }
}
