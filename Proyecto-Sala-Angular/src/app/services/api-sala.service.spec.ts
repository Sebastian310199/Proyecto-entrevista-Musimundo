import { TestBed } from '@angular/core/testing';

import { ApiSalaService } from './api-sala.service';

describe('ApiSalaService', () => {
  let service: ApiSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
