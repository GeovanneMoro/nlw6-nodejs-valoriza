import { Router } from "express";

import { CreateComplimentsController } from "../../../../modules/compliments/useCases/createCompliments/CreateComplimentsController";

const complimentsRouter = Router();
const createComplimentsController = new CreateComplimentsController();

complimentsRouter.post("/", createComplimentsController.handle);

export { complimentsRouter };
