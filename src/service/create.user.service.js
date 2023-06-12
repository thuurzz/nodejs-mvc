import { UserRepository } from "../repository/user.repository.js";

class CreateUserService {
  create(data) {
    if (!data.name) {
      throw new Error("Name is required");
    }

    const userRepository = new UserRepository();
    const userAlreadyExists = userRepository.findByUsername(data.name);
    if (userAlreadyExists.length > 0) {
      throw new Error("User already exists");
    }
    const user = userRepository.save(data);
    return user;
  }

  showById(id) {
    const userRepository = new UserRepository();
    const user = userRepository.findById(id);
    return user;
  }

  showAll() {
    const userRepository = new UserRepository();
    const users = userRepository.findAll();
    return users;
  }
}

export { CreateUserService };
