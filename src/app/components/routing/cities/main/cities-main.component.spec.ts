import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesMainComponent } from './cities-main.component';

describe('CitiesAsideComponent', () => {
  let component: CitiesMainComponent;
  let fixture: ComponentFixture<CitiesMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CitiesMainComponent]
    });
    fixture = TestBed.createComponent(CitiesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
