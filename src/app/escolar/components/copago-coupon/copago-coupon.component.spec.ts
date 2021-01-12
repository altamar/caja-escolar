import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopagoCouponComponent } from './copago-coupon.component';

describe('CopagoCouponComponent', () => {
  let component: CopagoCouponComponent;
  let fixture: ComponentFixture<CopagoCouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopagoCouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopagoCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
