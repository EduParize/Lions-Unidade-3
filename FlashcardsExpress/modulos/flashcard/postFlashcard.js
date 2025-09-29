import { flashcard } from "../../flashcardSchma.js";
export async function postFlashcard(req, res) {
  const { idBaralho, pergunta, resposta } = req.body;
  // if (!idBaralho || !perguntaFlashcard || !respostaFlashcard) {
  //   res.status(400).send("Informacoes incompletas, insira novamente!");
  // }
  const novoFlashcard = new flashcard({
    pergunta:req.body.pergunta,
    resposta:req.body.resposta,
    idBaralho:req.body.idBaralho
  })
  try{
    const salvarFlashcard = await novoFlashcard.save()
    res.status(200).send("Flashcard criado com sucesso", salvarFlashcard)
  }catch(error){
    console.error("Erro ao criar o flashcard: ", error.message)
    throw error
  }
}
