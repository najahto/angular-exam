import { TestBed } from '@angular/core/testing';

import { FornisseurServiceService } from './fornisseur-service.service';

describe('FornisseurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FornisseurServiceService = TestBed.get(FornisseurServiceService);
    expect(service).toBeTruthy();
  });
});
