import { figurinha } from "../schema/FIgurinhasSchema.js";

export async function getFigurinha(req, res){
    try{
        const lista = await figurinha.find()
        if(!lista || lista.length==0){
            return res.status(400).send("Nenhuma figurinha cadastrada!")
        }
        return res.status(200).send(lista)
    }catch(error){
        console.error("Erro ao buscar as movimentacoes", error.message);
        res.status(500).send("Erro interno ao buscar o historico.");
        throw error;
    }
}