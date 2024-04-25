import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/index.controller.js";

const router = Router();

router.get("/api/users", getUsers);
router.get("/api/user/:id", getUserById);
router.post("/api/user", createUser);
router.put("/api/user/:id", updateUser);
router.delete("/api/user/:id", deleteUser);

export default router;