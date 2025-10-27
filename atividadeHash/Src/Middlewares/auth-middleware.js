import { RetornarErro } from "../Utils/utils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

export const Role = {
  USER: "USER",
  ADMIN: "ADMIN",
};
export function AuthMiddleware(...allowedRoles) {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return RetornarErro(res, "Token invalido", 401);

    let token = authHeader.startsWith("Bearer ")
      ? authHeader.slice(7)
      : authHeader;
    if (authHeader.startsWith("Bearer")) {
      token = authHeader.slice("Bearer ".length).trim();
    }
    try {
      const secret = process.env.JWT_SECRET;
      if (!secret) {
        console.log("JWT secret não configurado");
        return RetornarErro(res, "Erro de configuração", 500);
      }
  
      const decoded = jwt.verify(token, secret);
      req.user = decoded;

      const hasPermission = decoded.role?.some((r) => allowedRoles.includes(r));
      if (!hasPermission) return RetornarErro(res, "Acesso negado", 401);
      next();
    } catch (error) {
      console.log("Erro ao verificar token:", error.message);
      return RetornarErro(res, "Token invalido", 401);
    }
  };
}
