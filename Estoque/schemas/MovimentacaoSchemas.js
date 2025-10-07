import mongoose, { model } from "mongoose";
import { Produto } from "./ProdutosSchemas.js";

const movimentacaoSchemas = new mongoose.Schema({
    idProduto:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
    },
    tipo:{
        type:String,
        required: true,
        enum:['entrada', 'saida']
    },
    quantidadeMovimentacao:{
        type:Number,
        required: true,
        min:[1]
    },
    data:{
        type:Date,
        default: Date.now,
        required: true
    },
})
export const movimentacao = mongoose.model('movimentacao', movimentacaoSchemas)