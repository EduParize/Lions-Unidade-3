import { readData, writeData } from "../fileUtils.js";

export function postFlashcard(req, res) {
  const database = readData();
  const { baralhoID, perguntaFlashcard, respostaFlashcard } = req.body;
  if (!baralhoID || !perguntaFlashcard || !respostaFlashcard) {
    res.status(400).send("Informacoes incompletas, insira novamente!");
  }
  let proximoIDflashcard =
    database.flashcards.length > 0
      ? Math.max(...database.flashcards.map((m) => m.id)) + 1
      : 0;
  const IDbaralhoEscolhido = database.baralhos.findIndex(
    (l) => l.id == req.body.baralhoID
  );
  const novoFlashcard = {
    id: proximoIDflashcard++,
    baralhoID: req.body.baralhoID,
    nomeBaralho: database.baralhos[IDbaralhoEscolhido].nomeBaralho,
    perguntaFlashcard: req.body.perguntaFlashcard,
    respostaFlashcard: req.body.respostaFlashcard,
  };
  database.flashcards.push(novoFlashcard);
  writeData(database);
  res
    .status(200)
    .send(`Flashcard "${req.body.perguntaFlashcard}" criado com sucesso`);
}
