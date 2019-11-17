import { Injectable } from '@angular/core';
import {BaseService} from './repositories/base.service';
import {UserSimulationService} from './repositories/user.simulation.service';
import {UserBaseService} from './repositories/user.base.service';

@Injectable({
  providedIn: 'root'
})
export class UserSessionService {

  /**
   * Makes sure there's a data source available for the application.
   *
   * @param repository The data's source
   */
  constructor(private repository: UserSimulationService) {
    repository = new UserSimulationService();
  }

  /**
   * Returns the repository itself.
   */
  public getRepository(): UserBaseService {
    return this.repository;
  }
}
