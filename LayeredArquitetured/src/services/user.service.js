import repo from "../repositories/user.repository.js";
import returnError from "../utils/returnError.js";

function validations({ Name, Email, Password }) {
  if (!Name) {
    returnError("Nome eh obrigatorio", 400);
  }
  if (!Email) {
    returnError("Email eh obrigatorio", 400);
  }
  if (!Password) {
    returnError("Senha eh obrigatoria", 400);
  }
}

export default {
  async createUser(data) {
    validations(data);

    const existing = await repo.findEmail(data.email);
    if (existing) {
      returnError("Eamil ja cadastrado", 409);
    }
    return repo.create({
      name: data.Name.trim(),
      email: data.Email.trim(),
      password: data.Password,
    });
  },
  async listUser() {
    return repo.findAll();
  },

  async getUser(id) {
    const user = await findByID(id);
    if (!user) {
      returnError("Nenhum usuario encontrado com esse id", 404);
      return user;
    }
  },
  
};
