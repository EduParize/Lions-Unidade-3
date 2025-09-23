import PromptSync from "prompt-sync";
import { flashcards } from "../data.js";
import { exibirMenu } from "../menu.js";
export const prompt = PromptSync({ sigint: true });
export function deletarFlashcard() {

    console.clear();
    flashcards.forEach((flashcard) => {
      console.log(`ID: ${flashcard.id}\nPergunta: "${flashcard.pergunta}"`);
      console.log("-------------------------------");
    });
    console.log("Insira qual a flashcard gostaria de deletar(ID): ");
    let deletarOpcaoFC = prompt("> ");
    deletarOpcaoFC = parseInt(deletarOpcaoFC);
    const FCIDdeletar = flashcards.findIndex(
      (flashcard) => flashcard.id === deletarOpcaoFC
    );
    if (FCIDdeletar === -1) {
      console.clear();
      console.log(
        "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
      );
      deletarFlashcard();
    }
    console.clear()
    console.log(`Flashcard "${flashcards[FCIDdeletar].pergunta}" deletado!`)
    flashcards.splice(FCIDdeletar, 1)

    exibirMenu()

}
