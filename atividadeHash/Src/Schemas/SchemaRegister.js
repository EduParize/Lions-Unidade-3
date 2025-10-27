import mongoose from "mongoose"
export const SchemaRegister = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    Senha: {
        type: String,
        required: true
    },
    Role:{
        type:[String],
        enum: ["ADMIN", "USER"],
        default: "USER"
    }

})

export const RegisterUserMGS = mongoose.model("Register", SchemaRegister)

