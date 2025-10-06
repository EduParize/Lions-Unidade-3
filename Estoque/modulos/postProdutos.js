import { produto } from "../schemas/ProdutosSchemas.js";
export async function postProduto(req, res){
    const {nomeProduto, quantidadeProduto} = req.body

    const novoProduto = new produto({
        nomeProduto,
        quantidadeProduto
    })

    try{
        const salvarProduto = await novoProduto.save()
        res.status(200).send(`Produto ${nomeProduto} criado com sucesso!`, salvarProduto)
    } catch(error){
        console.error("Erro ao criar o produto: ", error.message)
        throw error
    }
    }
