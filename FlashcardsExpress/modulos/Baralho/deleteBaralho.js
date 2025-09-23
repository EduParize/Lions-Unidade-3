import { readData, writeData } from "../fileUtils.js";

export function deleteBaralho(req, res) {
  const database = readData();
 const baralhos = database.baralhos
  const id = parseInt(req.params.id);

  if (id === -1) {
    res
      .status(400)
      .send(
        "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
      );
  }

  baralhos.splice(id, 1);
  writeData(database)
  res.status(200).send("Baralho deletado!");
}
