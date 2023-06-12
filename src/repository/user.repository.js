import { db } from "../database/user.database.creator.js";
import { v4 as uuid } from "uuid";

import { User } from "../models/user.model.js";

class UserRepository {
  findByUsername(username) {
    try {
      const user = db.filter((user) => user.name === username);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async findById(id) {
    try {
      const user = db.filter((user) => user.id === id);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async findAll() {
    try {
      const users = db;
      return users;
    } catch (error) {
      console.error(error);
    }
  }

  save(user) {
    try {
      const newUser = new User({ ...user, id: uuid() });
      db.push(newUser);
      return newUser;
    } catch (error) {
      console.error(error);
    }
  }
}

export { UserRepository };
