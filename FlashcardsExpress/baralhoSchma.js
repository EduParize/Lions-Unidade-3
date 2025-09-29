import mongoose from "mongoose";

const baralhoSchma = new mongoose.Schema({
    nomeBaralho:{
        type: String,
        required: true

    }
})
export const baralho = mongoose.model('baralho', baralhoSchma)