
import { flashcards } from "../data.js";
import { exibirMenu } from "../menu.js";
export const prompt = PromptSync({ sigint: true });

export function atualizarFlashcard() {
  console.clear();
  flashcards.forEach((flashcard) => {
    console.log(`ID: ${flashcard.id}\nPergunta: "${flashcard.pergunta}"`);
    console.log("-------------------------------");
  });
  console.log("Insira qual a flashcard gostaria de atualizar(ID): ");
  let atualizarOpcaoFC = prompt("> ");
  atualizarOpcaoFC = parseInt(atualizarOpcaoFC);
  const FCIDatualizar = flashcards.findIndex(
    (flashcard) => flashcard.id === atualizarOpcaoFC
  );
  if (FCIDatualizar === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
    );
    atualizarFlashcard();
  }

  console.log("Insira a nova pergunta do Flashcard: ");
  let novapergunta = prompt("> ");

  console.log("Insira a nova resposta do Flashcard: ");
  let novareposta = prompt("> ");
  flashcards[FCIDatualizar].pergunta = novapergunta;
  flashcards[FCIDatualizar].resposta = novareposta;
  console.clear();
  console.log("Flashcard atualizado com sucesso!");
  exibirMenu();
}
