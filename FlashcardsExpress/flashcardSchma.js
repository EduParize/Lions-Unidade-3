import mongoose from "mongoose";

const flashcardSchma = new mongoose.Schema({
  pergunta: {
    type: String,
    required: true,
  },
  resposta: {
    type: String,
    required: true,
  },
    idBaralho: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref:"baralho"
    },

});
export const flashcard = mongoose.model("flashcard", flashcardSchma);
