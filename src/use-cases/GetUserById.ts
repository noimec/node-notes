import { KnexPgUserRepository } from "../infrastructure/repositories/KnexPgUserRepository";

export class GetUserById {
  constructor(private userRepository: KnexPgUserRepository) { }

  async execute(id: number) {
    return await this.userRepository.findById(id)
  }
}
