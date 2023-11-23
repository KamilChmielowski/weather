import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourComponent } from './hour.component';

describe('HourComponent', () => {
  let component: HourComponent;
  let fixture: ComponentFixture<HourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HourComponent]
    });
    fixture = TestBed.createComponent(HourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
