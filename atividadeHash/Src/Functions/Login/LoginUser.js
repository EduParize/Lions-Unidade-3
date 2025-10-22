import { RegisterUserMGS } from '../../Schemas/SchemaRegister.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

async function loginUser(req, res){
  const { Email, Senha } = req.body;

  const user = await RegisterUserMGS.findOne({ Email });
  if (!user) return res.status(404).json({ error: 'Usuário não encontrado' });

  const validPassword = await bcrypt.compare(Senha, user.Senha);
  if (!validPassword) return res.status(401).json({ error: 'Senha incorreta' });

  const secret = process.env.JWT_SECRET;
  if (!secret) {
      console.log('JWT secret não configurado');
      return res.status(500).json({ error: "Erro de configuração do servidor."});
  }
  const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });

  res.json({ message: 'Login realizado com sucesso!', token });
}

export { loginUser };