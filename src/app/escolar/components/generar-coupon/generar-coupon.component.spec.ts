import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCouponComponent } from './generar-coupon.component';

describe('GenerarCouponComponent', () => {
  let component: GenerarCouponComponent;
  let fixture: ComponentFixture<GenerarCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
