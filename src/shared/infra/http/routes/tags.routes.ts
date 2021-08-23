import { Router } from "express";

import { ensureAdmin } from "../../../../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../../../middlewares/ensureAuthenticated";
import { CreateTagsController } from "../../../../modules/tags/useCases/createTags/CreateTagsController";
import { ListTagsController } from "../../../../modules/tags/useCases/listTags/ListTagsController";

const tagsRouter = Router();
const createTagsController = new CreateTagsController();
const listTagsController = new ListTagsController();

tagsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createTagsController.handle
);
tagsRouter.get("/", ensureAuthenticated, listTagsController.handle);

export { tagsRouter };
