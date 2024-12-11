import knex from "knex";

import { User, UserRepository } from "../../domain";

export class KnexPgUserRepository implements UserRepository {
  create(user: User): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findById(id: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
