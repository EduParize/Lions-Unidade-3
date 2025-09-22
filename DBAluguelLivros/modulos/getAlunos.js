import { readData, writeData } from "./fileUtils.js";


export function getAluno(req, res) {
    const database = readData()
    const alunos = database.alunos
  if (alunos.length > 0) {
    res.status(200).send(alunos);
  } else {
    res.status(400).send("Nenhum aluno cadastrado!");
  }
}
