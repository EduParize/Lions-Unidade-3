import { readData, writeData } from "./fileUtils.js";

export function postAluno(req, res) {
  const { nomeAluno, matriculaAluno, cursoAluno, anoAluno } = req.body;
  if (!nomeAluno || !matriculaAluno || !cursoAluno || !anoAluno) {
    res
      .status(400)
      .send(`Informacoes incompletas, por favor insira novamente!`);
  }
  const database = readData();
  let proximoIDAluno = database.alunos.length > 0
  ? Math.max(...database.alunos.map((m) => m.id)) + 1
  : 0;
  const novoAluno={
    id:proximoIDAluno++,
    nomeAluno:req.body.nomeAluno,
    matriculaAluno:req.body.matriculaAluno,
    cursoAluno:req.body.cursoAluno,
    anoAluno: req.body.anoAluno
  }
  database.alunos.push(novoAluno)
  writeData(database)
  return res.status(200).send(`Aluno ${req.body.nomeAluno} criado com sucesso!`)
}
