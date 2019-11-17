import {Post} from '../post';

export class User {
  static idCounter: number;
  id: number;
  email: string;
  password: string;
  nickname: string;
  isAdmin: boolean;
  totalPoints: number;
  isActive: boolean;

  /**
   * Creates a new instance of User class.
   *
   * @param email User's email
   * @param password User's password
   * @param nickname User's nickname
   * @param isAdmin Decides if the user is admin or not
   */
  constructor(email: string, password: string, nickname: string, isAdmin: boolean) {
    this.email = email;
    this.password = password;
    this.nickname = nickname;
    this.isAdmin = isAdmin;
    this.totalPoints = 0;
    this.isActive = true;

    if (User.idCounter == null) {
      User.idCounter = 0;
      this.id = User.idCounter;
    } else {
      ++User.idCounter;
      this.id = User.idCounter;
    }
  }
  deactivateUser() {
    this.isActive = false;
  }
  reActivateUser() {
    this.isActive = true;
  }
  makeAdmin() {
    this.isAdmin = true;
  }
  unAdmin() {
    this.isAdmin = false;
  }
}
