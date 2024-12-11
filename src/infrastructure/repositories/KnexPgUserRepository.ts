import knex from "knex";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import { User } from "../../domain/entities/User";


export class KnexPgUserRepository implements UserRepository {
  create(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }

}
