import { exibirMenu } from "../menu.js";
import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos, flashcards } from "../data.js";

export function listarFlashcardsPorBaralhoId() {
  baralhos.forEach((baralho) => {
    console.log(`${baralho.id}-${baralho.titulo}`);
  });
  console.log("Insira o qual baralho gostaria de listar seus flashcards: ");
  let listarBaralhoID = prompt("> ");
  listarBaralhoID = parseInt(listarBaralhoID);

  const baralhoListarID = baralhos.findIndex(
    (baralho) => baralho.id === listarBaralhoID
  );

  if (baralhoListarID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
    );
    listarFlashcardsPorBaralhoId();
  }
  const baralhoListando = baralhos[baralhoListarID];

  console.clear();
  flashcards.forEach((flashcard) => {
    if (flashcard.idBaralho == listarBaralhoID) {
      console.log(`ID: ${flashcard.id}\nPergunta: ${flashcard.pergunta}`);
      console.log("---------------------");
    }
  });
  exibirMenu();
}
