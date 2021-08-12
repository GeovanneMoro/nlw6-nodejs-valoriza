import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    admin,
  }: ICreateUserDTO): Promise<void> {
    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User Already exists");
    }

    await this.usersRepository.create({ name, email, password, admin });
  }
}

export { CreateUserUseCase };
