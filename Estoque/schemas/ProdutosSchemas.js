import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    nomeProduto:{
        type:String,
        required:true
    },
    quantidadeProduto:{
        type:Number,
        required:true
    }
})
export const Produto = mongoose.model('produto', produtoSchema)