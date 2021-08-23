import { ICreateTagDTO } from "../dtos/ICreateTagDTO";
import { Tag } from "../infra/typeorm/entities/Tag";

interface ITagsRepository {
  create(data: ICreateTagDTO): Promise<Tag>;
  findByName(data: ICreateTagDTO): Promise<Tag>;
  listAll(): Promise<Tag[]>;
}

export { ITagsRepository };
