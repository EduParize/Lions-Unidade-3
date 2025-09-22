import { readData, writeData } from "./fileUtils.js";


export function getLivros(req, res) {
    const database = readData()
    const livros = database.livros
  if (livros.length > 0) {
    res.status(200).send(livros);
  } else {
    res.status(400).send("Nenhum livro cadastrado!");
  }
}
