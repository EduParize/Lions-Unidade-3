import { readData, writeData } from "./fileUtils.js";

export function deleteLivros(req, res) {
  const database = readData();
  const livros = database.livros;
  const id = parseInt(req.params.id, 10);
  let livrosIndex = database.livros.findIndex((aluno) => aluno.id == id);
  if (livrosIndex == -1) {
    res.status(400).send(`Nenhum livro encontrado com esse ID`);
  }

  livros.splice(id, 1)
  writeData(database)
  res.status(200).send(`Livro deletado!`)
}
