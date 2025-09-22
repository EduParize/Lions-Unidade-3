import { readData, writeData } from "./fileUtils.js";

export function putAluguel(req, res) {
  const database = readData();
  const alugueis = database.alugueis;
  const livros = database.livros;
  const alunos = database.alunos;

  const id = parseInt(req.params.id, 10);
  let aluguelIndex = database.alugueis.findIndex((aluno) => aluno.id == id);
  if (aluguelIndex == -1) {
    res.status(400).send(`Nenhum alguel encontrado com esse ID`);
  }
  const { idLivro, idAluno, dataAluguel, dataDevolucao } = req.body;
  if (!idLivro || !idAluno || !dataDevolucao) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const novoAluguel = {
    id: id,
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
  database.alugueis[aluguelIndex] = novoAluguel;
  writeData(database);
  res
    .status(200)
    .send(
      `Atualizado para aluguel do Livro "${livros[livroIndex].tituloLivro}" para o aluno "${alunos[alunoIndex].nomeAluno}"`
    );
}
