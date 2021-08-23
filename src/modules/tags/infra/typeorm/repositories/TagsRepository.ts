import { EntityRepository, getRepository, Repository } from "typeorm";

import { ICreateTagDTO } from "../../../dtos/ICreateTagDTO";
import { ITagsRepository } from "../../../repositories/ITagsRepository";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagsRepository implements ITagsRepository {
  private repository: Repository<Tag>;

  constructor() {
    this.repository = getRepository(Tag);
  }

  async create({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = this.repository.create({ name });

    await this.repository.save(tag);

    return tag;
  }

  async findByName({ name }: ICreateTagDTO): Promise<Tag> {
    const tag = await this.repository.findOne({ name });

    return tag;
  }

  async listAll(): Promise<Tag[]> {
    const tags = await this.repository.find();

    return tags;
  }
}

export { TagsRepository };
