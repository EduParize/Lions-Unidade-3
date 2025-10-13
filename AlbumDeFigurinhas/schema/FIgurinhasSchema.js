import mongoose from "mongoose";

const schemaFigurinha = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    numero:{
        type:Number,
        min:[0],
        required:true
    },
    tema:{
        type:String,
        required:true,
    }
})
export const figurinha = mongoose.model('figurinha', schemaFigurinha)
