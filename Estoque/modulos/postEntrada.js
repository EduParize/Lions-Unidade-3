//Adicionar a questao de aumentar e diminuir na colletion de produtos
import { movimentacao } from "../schemas/MovimentacaoSchemas";

export async function postEntrada(req, res){
    const {id}=req.params
    const {idProduto, tipo, quantidadeMovimentacao}= req.body

    const novaEntrada = new movimentacao({
        idProduto,
        tipo,
        quantidadeMovimentacao,
        data:Date.now
    })

    try{
        const salvarEntrada = await novaEntrada.save()
        res.send(200).send("Entrada criada com sucesso!")
    }catch(error){
        console.error("Erro em criar a entrada.")
        throw error
    }
} 