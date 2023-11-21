import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesAsideComponent } from './cities-aside.component';

describe('CitiesAsideComponent', () => {
  let component: CitiesAsideComponent;
  let fixture: ComponentFixture<CitiesAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CitiesAsideComponent]
    });
    fixture = TestBed.createComponent(CitiesAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
