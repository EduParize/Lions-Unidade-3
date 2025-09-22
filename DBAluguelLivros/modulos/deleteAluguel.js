import { readData, writeData } from "./fileUtils.js";

export function deleteAlguel(req, res) {
  const database = readData();
  const alugueis = database.alugueis;
  const id = parseInt(req.params.id, 10);
  let aluguelIndex = database.alugueis.findIndex((aluguel) => aluguel.id == id);
  if (aluguelIndex == -1) {
    res.status(400).send(`Nenhum aluguem encontrado com esse ID`);
  }

  alugueis.splice(id, 1);
  writeData(database);
  res.status(200).send(`Aluguel deletado!`);
}
