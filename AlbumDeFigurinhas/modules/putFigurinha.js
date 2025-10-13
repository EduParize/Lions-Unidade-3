import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function putFigurinha(req, res) {
  const { id } = req.params;
  const { nome, numero, tema } = req.body;
  try {
    const existeFigurinha = await figurinha.findById(id);
    if (!existeFigurinha) {
      res.status(400).send("Nenhuma figurinha encontrada com esse ID.");
    }
    const atualizarFigurinha = await figurinha.findByIdAndUpdate(
      id,
      { nome, numero, tema },
      { new: true, runValidators: true }
    );
    res.status(200).send("Figurinha atualizada com sucesso!", atualizarFigurinha);
  } catch (error) {
    console.error("Erro interno no servidor!", error.message);
    throw error;
  }
}
