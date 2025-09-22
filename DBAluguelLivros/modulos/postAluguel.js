import { readData, writeData } from "./fileUtils.js";

export function postAluguel(req, res) {
  const { idLivro, idAluno, dataAluguel, dataDevolucao } = req.body;
  if (!dataDevolucao || !idAluno || !idLivro) {
    res
      .status(400)
      .send("Informacoes incompletas, por favor insira novamente!");
  }
  const database = readData();
  const alugueis = database.alugueis;
  const livros = database.livros;
  const alunos = database.alunos;
  let proximoIDAluguel =
    database.alugueis.length > 0
      ? Math.max(...database.alugueis.map((m) => m.id)) + 1
      : 0;
  const novoAluguel = {
    id: proximoIDAluguel++,
    idLivro: req.body.idLivro,
    nomeLivro: livros[idLivro].tituloLivro,
    idAluno: req.body.idAluno,
    nomeAluno: alunos[idAluno].nomeAluno,
    dataAluguel: new Date().toISOString(),
    dataDevolucao: req.body.dataDevolucao,
  };
  let livroIndex = livros.findIndex((l) => l.id == req.body.idLivro);
  if (livroIndex == -1) {
    res.status(400).send("Nenhum livro encontrado com esse ID!");
  }
  let alunoIndex = alunos.findIndex((a) => a.id == req.body.idAluno);
  if (alunoIndex == -1) {
    res.status(400).send("Nenhum aluno encontrado com esse ID!");
  }
  alugueis.push(novoAluguel);
  writeData(database);
  res
    .status(201)
    .send(
      `Aluguel do Livro "${livros[livroIndex].tituloLivro}" para o aluno "${alunos[alunoIndex].nomeAluno}"`
    );
}
