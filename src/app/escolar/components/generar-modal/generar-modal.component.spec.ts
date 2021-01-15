import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarModalComponent } from './generar-modal.component';

describe('GenerarModalComponent', () => {
  let component: GenerarModalComponent;
  let fixture: ComponentFixture<GenerarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
