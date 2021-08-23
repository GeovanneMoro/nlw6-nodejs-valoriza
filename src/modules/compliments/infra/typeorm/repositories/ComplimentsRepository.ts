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

  async listReceive(id: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: { user_receiver: id },
      relations: ["userSender", "userReceiver", "tag"],
    });

    return compliments;
  }

  async listSend(id: string): Promise<Compliment[]> {
    const compliments = await this.repository.find({
      where: { user_sender: id },
      relations: ["userReceiver", "userSender", "tag"],
    });

    return compliments;
  }
}

export { ComplimentsRepository };
