import { inject, injectable } from "tsyringe";
import { classToPlain } from "class-transformer";

import { Tag } from "../../infra/typeorm/entities/Tag";
import { ITagsRepository } from "../../repositories/ITagsRepository";

@injectable()
class ListTagsUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute() {
    const tags = await this.tagsRepository.listAll();

    return classToPlain(tags);
  }
}

export { ListTagsUseCase };
