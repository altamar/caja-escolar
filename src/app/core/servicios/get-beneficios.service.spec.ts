import { TestBed } from '@angular/core/testing';

import { GetBeneficiosService } from './get-beneficios.service';

describe('GetBeneficiosService', () => {
  let service: GetBeneficiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBeneficiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
