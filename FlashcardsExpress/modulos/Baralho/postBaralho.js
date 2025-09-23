import { readData, writeData } from "../fileUtils.js";

export function postBaralho(req, res) {
  const { nomeBaralho, } = req.body;
  const database = readData()
  let proximoIDbaralho =
  database.baralhos.length > 0
    ? Math.max(...database.baralhos.map((m) => m.id)) + 1
    : 0;
    if(!nomeBaralho){
      res.status(400).send("Informaçoes incompletas, insira novamente!")
    }
    const novoBaralho = {
      id:proximoIDbaralho++,
      nomeBaralho:nomeBaralho,

    }
    database.baralhos.push(novoBaralho)
    writeData(database)
    res.status(200).send(`Baralho ${nomeBaralho} criado com sucesso!`)
}
