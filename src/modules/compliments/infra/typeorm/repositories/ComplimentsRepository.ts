import { EntityRepository, getRepository, Repository } from "typeorm";
import { ICreateComplimentDTO } from "../../../dtos/ICreateComplimentDTO";

import { IComplimentsRepository } from "../../../repositories/IComplimentsRepository";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepository implements IComplimentsRepository {
  private repository: Repository<Compliment>;

  constructor() {
    this.repository = getRepository(Compliment);
  }

  async create({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: ICreateComplimentDTO): Promise<Compliment> {
    const compliment = this.repository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await this.repository.save(compliment);

    return compliment;
  }
}

export { ComplimentsRepository };
