import express from "express";

import { UserController } from "../controller/user.controller.js";

const router = express.Router();

const userController = new UserController();

router.post("/", (req, res) => {
  userController.handle(req, res);
});

router.get("/", (req, res) => {
  userController.showAll(req, res);
});

router.get("/:id", (req, res) => {
  userController.show(req, res);
});

export { router as userRouter };
