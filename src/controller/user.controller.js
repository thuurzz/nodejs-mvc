import { CreateUserService } from "../service/create.user.service.js";

class UserController {
  handle(req, res) {
    const { name, email, password } = req.body;

    try {
      const createUserSerivce = new CreateUserService();
      const user = createUserSerivce.create({ name, email, password });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    try {
      const createUserSerivce = new CreateUserService();
      const user = await createUserSerivce.showById(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async showAll(req, res) {
    try {
      const createUserSerivce = new CreateUserService();
      const users = await createUserSerivce.showAll();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export { UserController };
