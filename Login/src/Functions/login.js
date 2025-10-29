import { Usuario } from "../Schemas/usuarioSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function login(req, res) {
  const { Email, Senha } = req.body;

  const user = await Usuario.findOne({Email});
  if(!user){
    return res.status(400).json("Email incorreto, insira novamente.");

  }
  const verifyPassword = await bcrypt.compare(Senha, user.Senha)
  if(!verifyPassword){
    res.status(400).json("Senha incorreta, insira novamente.")
  }

  const secret = process.env.JWT_SECRET
  if(!secret){
    return res.status(400).json("JWT secret nao encontrado")
  }
  const token = jwt.sign({ userId: user._id, role:user.Role }, secret, { expiresIn: '1h' })
  
  res.status(200).json({ message: 'Login realizado com sucesso!', token });
}
