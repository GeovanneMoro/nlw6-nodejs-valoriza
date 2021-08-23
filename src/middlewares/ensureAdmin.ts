import { NextFunction, Request, Response } from "express";

import { AppError } from "../shared/errors/AppError";
import { UserRepository } from "../modules/users/infra/typeorm/repositories/UserRepository";

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  //Recuperar informações do usuário
  const { id } = request.user;

  try {
    // Verificar se o usuario é admin
    const usersRepository = new UserRepository();

    const user = await usersRepository.findById(id);
    console.log(user);
    if (!user.admin) {
      console.log("entrou");
      throw new AppError("User unauthorized", 401);
    }

    next();
  } catch (err) {
    throw new AppError(err.message, 401);
  }
}

export { ensureAdmin };
