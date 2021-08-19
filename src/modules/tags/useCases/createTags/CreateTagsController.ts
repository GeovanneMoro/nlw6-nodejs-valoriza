import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTagsUseCase } from "./CreateTagsUseCase";

class CreateTagsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createTagsUseCase = container.resolve(CreateTagsUseCase);

    await createTagsUseCase.execute({ name });

    return response.status(201).send();
  }
}

export { CreateTagsController };
