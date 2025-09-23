import { readData, writeData } from "../fileUtils.js";

export function getBaralhos(req, res) {
  const database = readData()
  if (database.baralhos.length == 0) {
    res.status(400).send("Nenhum baralho cadastrado!");
  
  }
  res.status(200).send(database.baralhos)
}
