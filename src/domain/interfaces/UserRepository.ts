import { User } from "../entities/User";

export interface UserRepository {
  create(user: User): Promise<void>
  findById(id: number): Promise<User>
}
