import { movimentacao } from "../schemas/MovimentacaoSchemas.js";
import { Produto } from "../schemas/ProdutosSchemas.js";

export async function postMovimentacao(req, res){
    const {id, tipo}=req.params
    const {quantidadeMovimentacao}= req.body
    try{
    
    const produto = await Produto.findById(id)
        if(!produto){
           return res.status(404).send(`Produto nao encontrado!`)
        }

    
        if(tipo =='entrada'){
            produto.quantidadeProduto+=quantidadeMovimentacao
        }else if(tipo == 'saida'){
            if(quantidadeMovimentacao>produto.quantidadeProduto){
               return  res.status(400).send("Estoque insuficiente para ser retirado!")
            }
            produto.quantidadeProduto-=quantidadeMovimentacao
        }else{
           return res.status(400).send("Tipo de movimentacao invalido.")
        }
        const novaMovimentacao = new movimentacao({
            idProduto: id,
            tipo,
            quantidadeMovimentacao,
        })
        await novaMovimentacao.save()
         await produto.save()
        res.status(200).send("Movimentacao criada com sucesso!")
    }catch(error){
        console.error("Erro em criar a movimentacao.")
        res.status(500).send("Ocorreu um erro interno ao processar a movimentacao")
    }
} 