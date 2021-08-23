import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../shared/errors/AppError";
import { UserRepository } from "../modules/users/infra/typeorm/repositories/UserRepository";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  // Receber o token
  const authHeader = request.headers.authorization;

  // Validar se token está preenchido
  if (!authHeader) {
    throw new AppError("token missing", 401);
  }

  const [, token] = authHeader.split("Bearer ");

  try {
    // Validar se o token é válido
    const { sub: user_id } = verify(
      token,
      "52decffe8f045b79f6484fb2f8c3d8bb"
    ) as IPayload;

    // Verificar se o usuário existe
    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    //Recuperar informações do usuário
    request.user = { id: user_id };

    next();
  } catch (err) {
    throw new AppError("Invalid token", 401);
  }
}

export { ensureAuthenticated };
