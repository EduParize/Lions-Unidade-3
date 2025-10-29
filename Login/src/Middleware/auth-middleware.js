import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const Role = {
  USER: "USER",
  ADMIN: "ADMIN",
};
export function AuthMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json("Token invalido");
  }
  let token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;
  if (authHeader.startsWith("Bearer")) {
    token = authHeader.slice("Bearer ".length).trim();
  }
  try {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
      return res.status(401).json("JWT nao configurado");
    }
    const decoded = jwt.verify(token, secret);
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Erro ao verificar token:", error.message);
    return res.status(401).json("Token invalido");
  }
}
