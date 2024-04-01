//clases
class User {
  name = "";
  static welcome = "holi";
  constructor(name) {
    this.name = name;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}
//explicacion de herencia
class Great extends User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {}
}
