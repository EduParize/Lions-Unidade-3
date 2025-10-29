import mongoose from "mongoose";
export const usuarioSchema= new mongoose.Schema({
    Nome:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,     
    },
    Senha:{
        type:String,
        required:true,
    },
    Role:{
        type:[String],
        enum:["ADMIN", "USER"],
        default:"USER"
    }

})
export const Usuario = mongoose.model("Usuario" , usuarioSchema)