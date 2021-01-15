import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCouponComponent } from './detalle-coupon.component';

describe('DetalleCouponComponent', () => {
  let component: DetalleCouponComponent;
  let fixture: ComponentFixture<DetalleCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
