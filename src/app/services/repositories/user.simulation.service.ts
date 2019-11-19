import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {UserBaseService} from './user.base.service';

@Injectable({
  providedIn: 'root'
})
export class UserSimulationService implements UserBaseService {
  users: User[];

  /**
   * Makes sure the application has test data to work with.
   */
  constructor() {
    this.users = [];

    const testUser = [
      new User('nielsbier72@gmail.com', 'wachtwoord123', 'Niels', false),
      new User('jochem_de_gamer@hotmail.nl', 'lotsofcrab66', 'DutchJochemNL', true),
      new User('sannevanbeker@protonmail.co.uk', '22randomwachtwoord11!', 'Schanne', false)
    ];

    for (const user of testUser) {
      this.users.push(user);
    }
  }

  /**
   * Adds a new post into the posts array.
   *
   * @param user The new user that needs to be inserted
   */
  add(user: User): number {
    return this.users.push(user);
  }

  /**
   * Gets all the users saved in the posts array.
   */
  getAll(): User[] {
    return this.users;
  }

  /**
   * Removes the user positioned on given index.
   *
   * @param index The user's index
   */
  remove(index: number): User {

    // Make sure the requested index exists
    if (index < this.users.length) {
      this.users[index].isActive = false;

      return this.users[index];
    } else {
      return null;
    }
  }

  /**
   * Updates the user positioned on given index.
   *
   * @param index The user's index
   * @param user The user's new values
   */
  update(index: number, user: User): void {

    // Make sure the requested index exists
    if (index < this.users.length) {
      this.users[index] = user;
    }
  }
}
