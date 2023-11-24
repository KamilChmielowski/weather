import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDetailsComponent } from './more-details.component';

describe('AirConditionsComponent', () => {
  let component: MoreDetailsComponent;
  let fixture: ComponentFixture<MoreDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoreDetailsComponent]
    });
    fixture = TestBed.createComponent(MoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
