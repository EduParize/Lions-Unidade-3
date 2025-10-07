import { movimentacao } from "../schemas/MovimentacaoSchemas.js"
export async function getHistorico(req, res){
    const {id} = req.params
    try{
        const historico = await movimentacao.find({idProduto: id})
                if(!movimentacao || historico.length==0){
                   return res.status(404).send(`Movimentacao nao encontrada!`)
                }
                
        res.status(200).send(historico)
    }catch(error){
        console.error("Erro ao buscar as movimentacoes", error.message)
        res.status(500).send("Erro interno ao buscar o historico.")
        throw error
    }
}