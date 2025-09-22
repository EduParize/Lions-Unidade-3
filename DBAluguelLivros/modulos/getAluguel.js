import { readData, writeData } from "./fileUtils.js";


export function getAluguel(req, res) {
    const database = readData()
    const alugueis = database.alugueis
  if (alugueis.length > 0) {
    res.status(200).send(alugueis);
  } else {
    res.status(400).send("Nenhum aluguel cadastrado!");
  }
}
