import { readData, writeData } from "./fileUtils.js";

export function getBuscarLivros(req, res) {
  const { tituloLivro, autorLivro, anoLivro, generoLivro } = req.query;
  const database = readData()
  const livros = database.livros;
  let resultado = [...livros];
  if (tituloLivro) {
    resultado = resultado.filter((livro) =>
      livro.tituloLivro.toLowerCase().includes(tituloLivro.toLowerCase())
    );
  }
  if (autorLivro) {
    resultado = resultado.filter((livro) =>
      livro.autorLivro.toLowerCase().includes(autorLivro.toLowerCase())
    );
  }
  if (generoLivro) {
    resultado = resultado.filter((livro) =>
      livro.generoLivro.toLowerCase().includes(generoLivro.toLowerCase())
    );
  }
  if (anoLivro) {
    resultado = resultado.filter((livro) => livro.anoLivro == anoLivro);
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum livro encontrado com essa busca!" });
  }
  res.status(200).send(resultado);
}
