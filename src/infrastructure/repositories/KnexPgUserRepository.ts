import knex from "knex";

import { User, UserRepository } from "../../domain";

export class KnexPgUserRepository implements UserRepository {
  async create(user: User): Promise<void> {
    await knex("users").insert({
      id: user.id,
      login: user.login,
      hash: user.hash,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })
  }

  async findByLogin(login: string): Promise<User | null> {
    const row = await knex("users").where({ login: login }).first()
    if (!row) return null;
    return new User(
      row.id,
      row.login,
      row.hash,
      row.created_at,
      row.updated_at,
    )
  }

  async findById(id: number): Promise<User | null> {
    const row = await knex("users").where({ id: id }).first()
    if (!row) return null;
    return new User(
      row.id,
      row.login,
      row.hash,
      row.created_at,
      row.updated_at,
    )
  }
}
