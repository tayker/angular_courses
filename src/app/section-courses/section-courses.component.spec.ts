import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCoursesComponent } from './section-courses.component';

describe('SectionCoursesComponent', () => {
  let component: SectionCoursesComponent;
  let fixture: ComponentFixture<SectionCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
