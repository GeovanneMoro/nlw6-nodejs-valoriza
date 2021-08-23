import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/users/useCases/authenticateUser/AuthenticateUserController";

const authenticateUserRouter = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateUserRouter.post("/", authenticateUserController.handle);

export { authenticateUserRouter };
