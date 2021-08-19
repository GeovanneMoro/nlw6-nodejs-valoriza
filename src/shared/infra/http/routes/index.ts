import { Router } from "express";

import { authenticateUserRouter } from "./authenticate.routes";
import { tagsRouter } from "./tags.routes";
import { usersRouter } from "./users.routes";
import { complimentsRouter } from "./compliments.routes";

const router = Router();

router.use("/users", usersRouter);
router.use("/tags", tagsRouter);
router.use("/compliments", complimentsRouter);
router.use(authenticateUserRouter);

export { router };
