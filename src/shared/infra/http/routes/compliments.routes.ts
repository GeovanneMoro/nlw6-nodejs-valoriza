import { Router } from "express";

import { CreateComplimentsController } from "../../../../modules/compliments/useCases/createCompliments/CreateComplimentsController";
import { ListUserReceiveComplimentsController } from "../../../../modules/compliments/useCases/listUserReceiveCompliments/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "../../../../modules/compliments/useCases/listUserSendCompliments/ListUserSendComplimentsController";

const complimentsRouter = Router();
const createComplimentsController = new CreateComplimentsController();
const listUserReceiveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();

complimentsRouter.post("/", createComplimentsController.handle);
complimentsRouter.get("/receive", listUserReceiveComplimentsController.handle);
complimentsRouter.get("/send", listUserSendComplimentsController.handle);

export { complimentsRouter };
