import { readData, writeData } from "./fileUtils.js";

export function postLivros(req, res) {
  const { tituloLivro, autorLivro, anoLivro, generoLivro } = req.body;
  if (!tituloLivro || !autorLivro || !anoLivro || !generoLivro) {
    res
      .status(400)
      .send("Informacoes incompletas, por favor insira novamente!");
  }
  const database = readData();
  let proximoIDlivro =
    database.livros.length > 0
      ? Math.max(...database.livros.map((m) => m.id)) + 1
      : 0;
  const novoLivro = {
    id: proximoIDlivro++,
    tituloLivro: req.body.tituloLivro,
    autorLivro: req.body.autorLivro,
    anoLivro: req.body.anoLivro,
    generoLivro: req.body.generoLivro,
  };
  database.livros.push(novoLivro);
  writeData(database);
  return res.status(201).send(`Livro ${req.body.tituloLivro} criado com sucesso!`);
}
