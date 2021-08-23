import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUserReceiveComplimentsUseCase } from "./ListUserReceiveComplimentsUseCase";

class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserReceiveComplimentsUseCase = container.resolve(
      ListUserReceiveComplimentsUseCase
    );

    const compliments = await listUserReceiveComplimentsUseCase.execute(id);

    return response.json(compliments);
  }
}

export { ListUserReceiveComplimentsController };
