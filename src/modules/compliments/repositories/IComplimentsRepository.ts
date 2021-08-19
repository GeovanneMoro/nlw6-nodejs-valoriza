import { ICreateComplimentDTO } from "../dtos/ICreateComplimentDTO";
import { Compliment } from "../infra/typeorm/entities/Compliment";

interface IComplimentsRepository {
  create(data: ICreateComplimentDTO): Promise<Compliment>;
}

export { IComplimentsRepository };
