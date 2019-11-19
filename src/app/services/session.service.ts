import {EventEmitter, Injectable} from '@angular/core';
import {BaseService} from './repositories/base.service';
import {SimulationService} from './repositories/simulation.service';
import {UserSimulationService} from './repositories/user.simulation.service';
import {UserBaseService} from './repositories/user.base.service';
import {User} from '../model/user';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  currentUser = new EventEmitter<User>();
  //private currentUser;
  public eMail: string;
  public passWord: string;
  /**
   * Makes sure there's a data source available for the application.
   *
   * @param repository The post data's source
   * @param userRepository The user data's source
   */
  constructor(private repository: SimulationService, private userRepository: UserSimulationService) {
    this.repository = new SimulationService();
    this.userRepository = new UserSimulationService();
  }

  /**
   * Returns the repository itself.
   */
  public getRepository(): BaseService {
    return this.repository;
  }

  public getUserRepository(): UserBaseService {
    return this.userRepository;
  }

  signUp(eMail: string, nickName: string, passWord: string): boolean {
      try{
        const user = new User(eMail, passWord, nickName, false);
        this.userRepository.add(user);
        this.currentUser.emit(user);
        this.currentUser.subscribe(currentUser => console.log(currentUser));
      }
      catch{
        return false;
      }
    return true;
  }

  signIn(eMail: string, passWord: string): boolean {
    for (let i = 0; i < this.userRepository.getAll().length; i++) {
      if(this.userRepository.getAll()[i].getPassword() == passWord && this.userRepository.getAll()[i].getEmail() == eMail){
        this.currentUser.emit(this.userRepository.getAll()[i]);
        this.currentUser.subscribe(currentUser => console.log(currentUser));
        return true;
      }
    }
    return false;
  }

  signOff() {
    this.currentUser.emit(null);
  }
}
