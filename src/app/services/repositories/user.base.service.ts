import {User} from '../../model/user';

export interface UserBaseService {

  add(post: User): number;

  getAll(): User[];

  remove(index: number): User;

  update(index: number, user: User): void;
}
