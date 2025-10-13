import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function postFigurinha(req, res) {
  const { nome,numero, tema } = req.body;

  
  
  const adicionarFigurinha = new figurinha({
    nome,
    numero,
    tema
  })
  if (!nome || !tema) {
    res.status(400).send("Dados incorretos, insira novamante!");
  }
try{
    const salvarFigurinha = await adicionarFigurinha.save()
    res.status(201).send(`Figurinha '${req.body.nome}' criada com sucesso!`, salvarFigurinha)

}catch(error){
    console.error("Erro ao adicionar uma nova figurinha.", error.message)
    throw error
}
}