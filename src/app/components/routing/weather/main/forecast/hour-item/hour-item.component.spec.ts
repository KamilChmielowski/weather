import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourItemComponent } from './hour-item.component';

describe('HourItemComponent', () => {
  let component: HourItemComponent;
  let fixture: ComponentFixture<HourItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HourItemComponent]
    });
    fixture = TestBed.createComponent(HourItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
