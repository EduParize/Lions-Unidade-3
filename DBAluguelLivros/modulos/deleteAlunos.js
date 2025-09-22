import { readData, writeData } from "./fileUtils.js";

export function deleteAlunos(req, res) {
  const database = readData();
  const alunos = database.alunos;
  const id = parseInt(req.params.id, 10);
  let alunoIndex = database.alunos.findIndex((aluno) => aluno.id == id);
  if (alunoIndex == -1) {
    res.status(400).send(`Nenhum aluno encontrado com esse ID`);
  }

  alunos.splice(id, 1)
  writeData(database)
  res.status(200).send(`Aluno deletado!`)
}
