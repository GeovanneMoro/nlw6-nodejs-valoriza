import { inject, injectable } from "tsyringe";
import { classToPlain } from "class-transformer";

import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class ListUsersUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUserRepository
  ) {}

  async execute() {
    const users = await this.usersRepository.listAll();

    return classToPlain(users);
  }
}

export { ListUsersUseCase };
