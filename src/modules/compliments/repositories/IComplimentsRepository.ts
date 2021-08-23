import { ICreateComplimentDTO } from "../dtos/ICreateComplimentDTO";
import { Compliment } from "../infra/typeorm/entities/Compliment";

interface IComplimentsRepository {
  create(data: ICreateComplimentDTO): Promise<Compliment>;
  listReceive(id: string): Promise<Compliment[]>;
  listSend(id: string): Promise<Compliment[]>;
}

export { IComplimentsRepository };
