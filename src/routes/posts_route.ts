import express from "express";
const router = express.Router();
import postsController from "../controllers/posts_controller";
import { authMiddleware } from "../controllers/auth_controller";

router.get("/", postsController.getAll.bind(postsController));

router.get("/:id", postsController.getById.bind(postsController));

router.post("/", authMiddleware, postsController.create.bind(postsController));

router.delete("/:id", authMiddleware, postsController.deleteItem.bind(postsController));

export default router;