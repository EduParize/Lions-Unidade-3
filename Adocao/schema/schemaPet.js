import mongoose from "mongoose";

const schemaPet = new mongoose.Schema({
    nome:{
        type:String,
        required:true,
    },
    especie:{
        type:String,
        required:true,
    },
    idade:{
        type:Number,
        required:true,
        min:[0],
    },
    status:{
        type:String,
        required:true,
        enum:['disponivel', 'indisponivel'],

    }

})
export const pet = mongoose.model('pet', schemaPet)  