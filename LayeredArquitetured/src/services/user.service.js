import repo from "../repositories/user.repository.js";
import returnError from "../utils/returnError.js";

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

    const existing = await repo.findEmail(data.email);
    if (existing) {
      throw returnError("Eamil ja cadastrado", 409);
    }
    return repo.create({
      Name: data.Name.trim(),
      Email: data.Email.trim(),
      Password: data.Password,
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
  
};
