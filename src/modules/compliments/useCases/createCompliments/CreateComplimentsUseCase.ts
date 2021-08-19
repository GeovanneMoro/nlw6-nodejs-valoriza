import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../../users/repositories/IUserRepository";
import { ICreateComplimentDTO } from "../../dtos/ICreateComplimentDTO";
import { Compliment } from "../../infra/typeorm/entities/Compliment";
import { IComplimentsRepository } from "../../repositories/IComplimentsRepository";

@injectable()
class CreateComplimentsUseCase {
  constructor(
    @inject("ComplimentsRepository")
    private complimentsRepository: IComplimentsRepository,
    @inject("UsersRepository") private usersRepository: IUserRepository
  ) {}

  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: ICreateComplimentDTO): Promise<Compliment> {
    //Verificar se user_sender e user_receiver são o mesmo usuário
    if (user_sender === user_receiver) {
      throw new AppError("Incorrect User Receiver");
    }

    //Verificar se user_receiver existe
    const userReceiverExists = await this.usersRepository.findById(
      user_receiver
    );
    if (!userReceiverExists) {
      throw new AppError("User Receiver does not exists");
    }

    //Criar elogio
    const compliment = await this.complimentsRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return compliment;
  }
}

export { CreateComplimentsUseCase };
