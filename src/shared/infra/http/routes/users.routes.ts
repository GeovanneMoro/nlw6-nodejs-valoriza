import { Router } from "express";
import { ensureAuthenticated } from "../../../../middlewares/ensureAuthenticated";

import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/users/useCases/listUsers/ListUsersController";

const usersRouter = Router();
const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

usersRouter.post("/", createUserController.handle);
usersRouter.get("/", ensureAuthenticated, listUsersController.handle);

export { usersRouter };
