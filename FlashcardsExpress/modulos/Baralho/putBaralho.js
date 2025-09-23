import { readData, writeData } from "../fileUtils.js";

export function putBaralho(req, res) {
  const database = readData();
  const id = parseInt(req.params.id);

  let baralhoIndex = database.baralhos.findIndex((baralho) => baralho.id == id);
  if (baralhoIndex == -1) {
    res.status(400).send(`Nenhum baralho encontrado com esse ID`);
  }
  const { nomeBaralho } = req.body;

  if (!nomeBaralho) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const atualizadoBaralho = {
    id: id,
    nomeBaralho: req.body.nomeBaralho,
  };
  database.baralhos[baralhoIndex] = atualizadoBaralho;
  writeData(database);
  res.status(200).send(`Baralho atualizado para ${req.body.nomeBaralho}`);
}
