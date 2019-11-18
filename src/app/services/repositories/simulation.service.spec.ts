import {TestBed} from '@angular/core/testing';

import {SimulationService} from './simulation.service';

describe('SimulationService', () => {
  let service: SimulationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() =>
    service = TestBed.get(SimulationService)
  );

  it('should be created', () => {
    // const service: SimulationService = TestBed.get(SimulationService);
    expect(service).toBeTruthy();
  });
});
