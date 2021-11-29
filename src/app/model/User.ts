export class User {
  name: string
  surname: string
  email: string
  password: string
  points: number


  constructor(name: string, surname: string, email: string, password: string) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
    this.points = 0;
  }
}
