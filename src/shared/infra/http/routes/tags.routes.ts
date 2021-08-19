import { Router } from "express";

import { ensureAdmin } from "../../../../middlewares/ensureAdmin";
import { CreateTagsController } from "../../../../modules/tags/useCases/createTags/CreateTagsController";

const tagsRouter = Router();
const createTagsController = new CreateTagsController();

tagsRouter.post("/", ensureAdmin, createTagsController.handle);

export { tagsRouter };
