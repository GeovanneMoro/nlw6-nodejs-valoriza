import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateComplimentsUseCase } from "./CreateComplimentsUseCase";

class CreateComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tag_id, user_sender, user_receiver, message } = request.body;

    const createComplimentsUseCase = container.resolve(
      CreateComplimentsUseCase
    );

    const compliment = await createComplimentsUseCase.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentsController };
