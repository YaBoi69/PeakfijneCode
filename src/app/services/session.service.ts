import {Injectable} from '@angular/core';
import {BaseService} from './repositories/base.service';
import {SimulationService} from './repositories/simulation.service';
import {UserSimulationService} from "./repositories/user.simulation.service";
import {UserBaseService} from "./repositories/user.base.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

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
}
