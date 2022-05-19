import { TestBed } from '@angular/core/testing';

import { ServPokeapiService } from './serv-pokeapi.service';

describe('ServPokeapiService', () => {
  let service: ServPokeapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServPokeapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
