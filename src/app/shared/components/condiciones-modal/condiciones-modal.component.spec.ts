import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionesModalComponent } from './condiciones-modal.component';

describe('CondicionesModalComponent', () => {
  let component: CondicionesModalComponent;
  let fixture: ComponentFixture<CondicionesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondicionesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondicionesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
