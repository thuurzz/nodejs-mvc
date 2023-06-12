export class User {
  constructor({ id, name, email, password }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static create({ id, name, email, password }) {
    return new User({ id, name, email, password });
  }
}
