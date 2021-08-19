import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import { ICreateTagDTO } from "../../dtos/ICreateTagDTO";
import { ITagsRepository } from "../../repositories/ITagsRepository";

@injectable()
class CreateTagsUseCase {
  constructor(
    @inject("TagsRepository")
    private tagsRepository: ITagsRepository
  ) {}

  async execute({ name }: ICreateTagDTO): Promise<void> {
    if (!name) {
      throw new AppError("incorrect name!");
    }
    const tagAlreadyExists = await this.tagsRepository.findByName({ name });

    if (tagAlreadyExists) {
      throw new AppError("Tag already exists!");
    }

    await this.tagsRepository.create({ name });
  }
}

export { CreateTagsUseCase };
