import { RetornarErro } from "../Utils/utils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

export function AuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return RetornarErro(res, "Token invalido", 401);

  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      console.log("JWT secret não configurado");
      return RetornarErro(res, "Erro de configuração", 500);
    }
    console.log("Verificando token:", token);
    const decoded = jwt.verify(token, secret);
    console.log("Token decodificado com sucesso:", decoded);
    req.user = decoded;
    next();
  } catch (error) {
    console.log("Erro ao verificar token:", error.message);
    return RetornarErro(res, "Token invalido", 401);
  }
}
