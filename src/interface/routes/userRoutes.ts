import { Router } from "express";

import { KnexPgUserRepository } from "../../infrastructure/repositories/KnexPgUserRepository";
import { GetUserById } from "../../use-cases/GetUserById";
import { UserController } from "../controllers/UserController";

const router = Router()

const userRepository = new KnexPgUserRepository()
const getUserById = new GetUserById(userRepository)
const userController = new UserController(getUserById)

router.get("/user/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  await userController.getUser(req, res);
});

export { router as userRoutes }
