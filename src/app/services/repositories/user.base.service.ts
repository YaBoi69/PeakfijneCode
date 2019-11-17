import {User} from '../../model/User';

export interface UserBaseService {

  add(post: User): number;

  getAll(): User[];

  remove(index: number): User;

  update(index: number, user: User): void;
}
