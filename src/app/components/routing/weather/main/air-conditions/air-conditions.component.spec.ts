import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirConditionsComponent } from './air-conditions.component';

describe('AirConditionsComponent', () => {
  let component: AirConditionsComponent;
  let fixture: ComponentFixture<AirConditionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AirConditionsComponent]
    });
    fixture = TestBed.createComponent(AirConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
