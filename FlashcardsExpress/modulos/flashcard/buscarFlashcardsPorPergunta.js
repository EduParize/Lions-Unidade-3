import PromptSync from "prompt-sync";
import { flashcards } from "../data.js";
import { exibirMenu } from "../menu.js";
export const prompt = PromptSync({ sigint: true });

export function buscarFlashcardsPorPergunta() {
  console.clear();
  console.log("Insira qual a palavra que deseja buscar nos flashcards");
  let perguntaBuscar = prompt("> ");
  if (!perguntaBuscar || perguntaBuscar.trim() === "") {
    console.log("Nenhum termo de busca inserido. Tente novamente.");
    exibirMenu();
  }
  let perguntaBuscarLower = perguntaBuscar.toLowerCase();

  let resultados = flashcards.filter((flashcard) =>
    flashcard.pergunta.toLowerCase().includes(perguntaBuscarLower)
  );

  console.clear();
  if (resultados.length === 0) {
    console.log(
      `Nenhum flashcard encontrado com a palavra "${perguntaBuscar}".`
    );
  } else {
    console.log(`--- Resultados da busca por "${perguntaBuscar}" ---`);
    resultados.forEach((flashcard) => {
      console.log(`ID: ${flashcard.id}`);
      console.log(`Pergunta: "${flashcard.pergunta}"`);
      console.log(`Resposta: "${flashcard.resposta}"`);
      console.log(`ID do Baralho: ${flashcard.idBaralho}`);
      console.log("-------------------------------");
    });
  }
  exibirMenu();
}
