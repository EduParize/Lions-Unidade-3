import { readData, writeData } from "./fileUtils.js";

export function getBuscarAluguel(req, res) {
  const { idLivro, nomeAluno, idAluno, nomeLivro, dataAluguel, dataDevolucao } =
    req.query;
  const database = readData();
  const alugueis = database.alugueis;
  let resultado = [...alugueis];
  if (nomeAluno) {
    resultado = resultado.filter((aluguel) =>
      aluguel.nomeAluno.toLowerCase().includes(nomeAluno.toLowerCase())
    );
  }
  if (nomeLivro) {
    resultado = resultado.filter((aluguel) =>
        aluguel.nomeLivro.toLowerCase().includes(nomeLivro.toLowerCase())
    );
  }
  if (idLivro) {
    resultado = resultado.filter((aluguel) => aluguel.idLivro == idLivro);
  }
  if (idAluno) {
    resultado = resultado.filter((aluguel) => aluguel.idAluno == idAluno);
  }
  if (dataAluguel) {
    resultado = resultado.filter((aluguel) => aluguel.dataAluguel == dataAluguel);
  }
  if (dataDevolucao) {
    resultado = resultado.filter((aluguel) => aluguel.dataDevolucao == dataDevolucao);
  }
  if (resultado.length == 0) {
    res
      .status(404)
      .json({ message: "Nenhum aluno encontrado com essa busca!" });
  }
  res.status(200).send(resultado);
}
