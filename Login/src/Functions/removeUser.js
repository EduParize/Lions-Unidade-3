import bcrypt from "bcrypt"
import mongoose from "mongoose"
import { Usuario, usuarioSchema } from "../Schemas/usuarioSchema.js"

export async function removeUser(req, res) {
    try{
    const {id} = req.params
    const {Senha} = req.body
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json("ID nao encontrado no banco de dados")
    }
    
    const user = await Usuario.findById(id)

    if(!user){
        res.status(404).json("Nenhum usuario encontrado com esse ID.")
    }
    if(!Senha){
        return res.status(400).json("Por favor insira a senha do usuario para remove-lo")
    }
    
    const senhaCorreta = await bcrypt.compare(Senha, user.Senha)
    if(!senhaCorreta){
        res.status(401).json("Senha incorreta, insira novamente")
    }
    await Usuario.findByIdAndDelete(id)
    return res.status(200).json("Usuario deletado com sucesso!");
}catch(error){
    console.error("Erro interno no servido!")
    throw error
}
    
}