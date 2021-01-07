import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaEscolarComponent } from './caja-escolar.component';

describe('CajaEscolarComponent', () => {
  let component: CajaEscolarComponent;
  let fixture: ComponentFixture<CajaEscolarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CajaEscolarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CajaEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
