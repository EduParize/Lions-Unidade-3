import mongoose from "mongoose";
import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function deleteFigurinha(req, res) {
  const { id } = req.params;
  const existeFigurinha = figurinha.findById(id)

  if(!existeFigurinha){
    res.status(400).send("Nenhuma figurinha encontrada com esse ID.")
}
try{
await figurinha.findByIdAndDelete(id)
res.status(200).send("Figurinha deletada com sucesso")
}catch(error){
    console.error("Erro interno no servido.")
    throw error
}
}
