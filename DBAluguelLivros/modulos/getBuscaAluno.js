import { readData, writeData } from "./fileUtils.js";

export function getBuscarAluno(req, res) {
  const { nomeAluno, matriculaAluno, cursoAluno, anoAluno } = req.query;
  const database = readData()
  const alunos = database.alunos;
  let resultado = [...alunos];
  if (nomeAluno) {
    resultado = resultado.filter((aluno) =>
        aluno.nomeAluno.toLowerCase().includes(nomeAluno.toLowerCase())
    );
  }
  if (matriculaAluno) {
    resultado = resultado.filter((aluno) =>
        aluno.matriculaAluno.toLowerCase().includes(matriculaAluno.toLowerCase())
    );
  }
  if (cursoAluno) {
    resultado = resultado.filter((aluno) =>
        aluno.cursoAluno.toLowerCase().includes(cursoAluno.toLowerCase())
    );
  }
  if (anoAluno) {
    resultado = resultado.filter((aluno) => aluno.anoAluno == anoAluno);
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum aluno encontrado com essa busca!" });
  }
  res.status(200).send(resultado);
}
