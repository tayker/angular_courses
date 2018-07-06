import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGarantComponent } from './modal-garant.component';

describe('ModalGarantComponent', () => {
  let component: ModalGarantComponent;
  let fixture: ComponentFixture<ModalGarantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalGarantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGarantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
