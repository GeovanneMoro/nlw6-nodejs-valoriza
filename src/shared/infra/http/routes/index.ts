import { Router } from "express";

import { authenticateUserRouter } from "./authenticate.routes";
import { tagsRouter } from "./tags.routes";
import { usersRouter } from "./users.routes";
import { complimentsRouter } from "./compliments.routes";

import { ensureAuthenticated } from "../../../../middlewares/ensureAuthenticated";

const router = Router();

router.use("/tags", tagsRouter);
router.use("/compliments", ensureAuthenticated, complimentsRouter);
router.use("/users", usersRouter);
router.use("/login", authenticateUserRouter);

export { router };
