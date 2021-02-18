import { TestBed } from '@angular/core/testing';

import { GenerarCuponService } from './generar-cupon.service';

describe('GenerarCuponService', () => {
  let service: GenerarCuponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerarCuponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
