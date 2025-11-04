import repo from "../repositories/user.repository.js";
import returnError from "../utils/returnError.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

function validations({ Name, Email, Password }) {
  if (!Name) {
    throw returnError("Nome eh obrigatorio", 400);
  }
  if (!Email) {
    throw returnError("Email eh obrigatorio", 400);
  }
  if (!Password) {
    throw returnError("Senha eh obrigatoria", 400);
  }
}

export default {
  async createUser(data) {
    validations(data);

    const existing = await repo.findEmail(data.Email);
    if (existing) {
      throw returnError("Email ja cadastrado", 409);
    }
    const hashPassword = await bcrypt.hash(data.Password, 10);
    return repo.create({
      Name: data.Name.trim(),
      Email: data.Email.trim(),
      Password: hashPassword,
      Role: data.Role,
    });
  },
  async listUser() {
    return repo.findAll();
  },

  async getUser(id) {
    const user = await findByID(id);
    if (!user) {
      throw returnError("Nenhum usuario encontrado com esse id", 404);
    }
    return user;
  },
  async updateUser(id, data){
    const user = await repo.findByID(id);
    if(!user){
      throw returnError("Nenhum usuario encontrado com esse id", 404);
    }
    if(data.Password){
      const hashPassword = await bcrypt.hash(data.Password, 10);
      data.Password = hashPassword;
    }
    return repo.updateByID(id, data);
  },
  async deleteUser(id){
    return repo.deleteById(id)
  }
};
