import mongoose from 'mongoose';
import returnError from '../utils/returnError.js';

export function ensureValidId(req, _res, next) {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    throw returnError('ID inválido.', 400);
  }
  next();
}