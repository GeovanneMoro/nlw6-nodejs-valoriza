import { container } from "tsyringe";

import { ComplimentsRepository } from "../../modules/compliments/infra/typeorm/repositories/ComplimentsRepository";
import { IComplimentsRepository } from "../../modules/compliments/repositories/IComplimentsRepository";
import { TagsRepository } from "../../modules/tags/infra/typeorm/repositories/TagsRepository";
import { ITagsRepository } from "../../modules/tags/repositories/ITagsRepository";
import { UserRepository } from "../../modules/users/infra/typeorm/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UsersRepository", UserRepository);

container.registerSingleton<ITagsRepository>("TagsRepository", TagsRepository);

container.registerSingleton<IComplimentsRepository>(
  "ComplimentsRepository",
  ComplimentsRepository
);
