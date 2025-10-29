import mongoose from "mongoose";
import bcrypt from "bcrypt"

import { Usuario } from "../Schemas/usuarioSchema.js"

export async function cadastro(req, res) {
try{
    const Dados = req.body
    const HashSenha = await bcrypt.hash(Dados.Senha, 12)
        const NewUser = await Usuario.create({
            ...Dados,
            Senha: HashSenha
        })
        NewUser.Senha=undefined
        res.status(201).json(`Usuario "${Dados.Nome}" criado com sucesso!`)
}catch(error){
    res.status(400).json("Erro interno!")

}
    
}