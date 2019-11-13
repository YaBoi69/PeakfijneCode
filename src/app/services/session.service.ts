import { Injectable } from '@angular/core';
import {BaseService} from "./repositories/base.service";
import {SimulationService} from "./repositories/simulation.service";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  /**
   * Makes sure there's a data source available for the application.
   *
   * @param repository The data's source
   */
  constructor(private repository: SimulationService) {
    repository = new SimulationService();
  }

  /**
   * Returns the repository itself.
   */
  public getRepository(): BaseService {
    return this.repository;
  }
}
