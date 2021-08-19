import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IAuthenticateRequest): Promise<string> {
    //Verificar se usuário existe
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    // Verificar se senha está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    //Gerar JWT
    //geovannenodenlwvaloriza
    const token = sign(
      { email: user.email },
      "52decffe8f045b79f6484fb2f8c3d8bb",
      { subject: user.id, expiresIn: "1d" }
    );

    return token;
  }
}

export { AuthenticateUserUseCase };
