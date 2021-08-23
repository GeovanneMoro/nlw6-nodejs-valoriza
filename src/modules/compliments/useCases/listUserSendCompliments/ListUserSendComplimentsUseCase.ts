import { injectable, inject } from "tsyringe";

import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { Compliment } from "../../infra/typeorm/entities/Compliment";
import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";

@injectable()
class ListUserSendComplimentsUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository
  ) {}
  async execute(id: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.listSend(id);

    return compliments;
  }
}

export { ListUserSendComplimentsUseCase };
