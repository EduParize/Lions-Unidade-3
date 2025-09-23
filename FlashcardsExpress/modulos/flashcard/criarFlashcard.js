import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { baralhos, gerarFlashcard } from "../data.js";
import { exibirMenu } from "../menu.js";

export function criarFlashcard() {
  baralhos.forEach((baralho) => {
    console.log(`${baralho.id}-${baralho.titulo}`);
    console.log("---------------------------------")
  });
  console.log("Insira o qual baralho gostaria de adicionar o flashcard: ");
  let baralhoOpcao = prompt("> ");
  baralhoOpcao = parseInt(baralhoOpcao);

  const baralhoID = baralhos.findIndex(
    (baralho) => baralho.id === baralhoOpcao
  );

  if (baralhoID === -1) {
    console.clear();
    console.log(
      "ID inválido! Nenhum baralho encontrado com este ID. Insira novamente!"
    );
    criarFlashcard();
  }
  console.clear();
  console.log("Insira a pergunta do flashcard: ");
  let perguntaFlashcard = prompt("> ");

  console.log("Insira a resposta do flashcard: ");
  let respostaFlashcard = prompt("> ");
  gerarFlashcard(perguntaFlashcard, respostaFlashcard, baralhoID)
  console.clear()
  console.log(`Flashcards "${perguntaFlashcard}" criado`)
  exibirMenu()
}
