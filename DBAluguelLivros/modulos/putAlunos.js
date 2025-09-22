import { readData, writeData } from "./fileUtils.js";

export function putAlunos(req, res) {
  const database = readData();

  const id = parseInt(req.params.id, 10);
  let alunoIndex = database.alunos.findIndex((aluno) => aluno.id == id);
  if ((alunoIndex == -1)) {
    res.status(400).send(`Nenhum aluno encontrado com esse ID`);
  }
  const { nomeAluno, matriculaAluno, cursoAluno, anoAluno } = req.body;
  if (!nomeAluno || !matriculaAluno || !cursoAluno || !anoAluno) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const novoAluno = {
    id: id,
    nomeAluno: req.body.nomeAluno,
    matriculaAluno: req.body.matriculaAluno,
    cursoAluno: req.body.cursoAluno,
    anoAluno: req.body.anoAluno,
  };
  database.alunos[alunoIndex] = novoAluno;
  writeData(database)
  res.status(200).send(`Aluno atualizado para ${req.body.nomeAluno}`);
}
