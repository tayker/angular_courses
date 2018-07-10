import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTimerComponent } from './banner-timer.component';

describe('BannerTimerComponent', () => {
  let component: BannerTimerComponent;
  let fixture: ComponentFixture<BannerTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
