import { readData, writeData } from "./fileUtils.js";

export function putLivros(req, res) {
  const database = readData();

  const id = parseInt(req.params.id, 10);
  let livroIndex = database.livros.findIndex((aluno) => aluno.id == id);
  if ((livroIndex == -1)) {
    res.status(400).send(`Nenhum livro encontrado com esse ID`);
  }
  const { tituloLivro, autorLivro, anoLivro, generoLivro } = req.body;
  if (!tituloLivro || !autorLivro || !anoLivro || !generoLivro) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const novoLivro = {
    id: id,
    tituloLivro: req.body.tituloLivro,
    autorLivro: req.body.autorLivro,
    anoLivro: req.body.anoLivro,
    generoLivro: req.body.generoLivro,
  };
  database.livros[livroIndex] = novoLivro;
  writeData(database)
  res.status(200).send(`Aluno atualizado para ${req.body.tituloLivro}`);
}
