import { injectable, inject } from "tsyringe";
import { Compliment } from "../../infra/typeorm/entities/Compliment";

import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";

@injectable()
class ListUserReceiveComplimentsUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository
  ) {}

  async execute(id: string): Promise<Compliment[]> {
    const compliments = await this.complimentsRepository.listReceive(id);

    return compliments;
  }
}

export { ListUserReceiveComplimentsUseCase };
