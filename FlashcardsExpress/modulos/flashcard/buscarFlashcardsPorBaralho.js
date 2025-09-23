import PromptSync from "prompt-sync";
import { flashcards, baralhos } from "../data.js";
import { exibirMenu } from "../menu.js";
export const prompt = PromptSync({ sigint: true });

export function buscarFlashcardsPorBaralho() {
  if (baralhos.length == 0) {
    console.log("Nenhum baralho cadastrado!");
    exibirMenu();
  }
  baralhos.forEach((baralho) => {
    console.log(`ID: ${baralho.id}\nNome: ${baralho.titulo}`);
    console.log("----------------------------------");
  });
  console.log("Insira o nome do baralho por qual deseja buscar: ");
  let buscaBaralho = prompt("> ");

  let baralhoBuscarID = baralhos.findIndex(
    (baralho) => baralho.titulo == buscaBaralho
  );
  if(baralhoBuscarID==-1){
    console.clear()
    console.log("Nenhum baralho com esse nome cadastrado! Insira novamente")
    console.log("---------------------")
    buscarFlashcardsPorBaralho()
  }
  console.clear()
  flashcards.forEach((flashcard) => {
    if (flashcard.idBaralho == baralhoBuscarID) {
      console.log(
        `ID: ${flashcard.id}\nPergunta: ${flashcard.pergunta}\nResposta: ${flashcard.resposta}`
      );
      console.log("---------------------------");
    }
  });
  exibirMenu();
}
