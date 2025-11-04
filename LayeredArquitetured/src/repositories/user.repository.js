import { user } from "../models/user.model.js";

export default {
  create(data) {
    return user.create(data);
  },
  findAll() {
    return user.find();
  },
  findByID(id) {
    return user.findById(id);
  },
  updateByID(id, data) {
    return user.findByIdAndUpdate(id, data, { new: true, runValidators: true });
  },
  deleteById(id) {
    return user.findByIdAndDelete(id);
  },
  findEmail(email) {
    return user.findOne({ email });
  },
};
