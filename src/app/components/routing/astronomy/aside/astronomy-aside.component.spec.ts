import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyAsideComponent } from './astronomy-aside.component';

describe('AstronomyAsideComponent', () => {
  let component: AstronomyAsideComponent;
  let fixture: ComponentFixture<AstronomyAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AstronomyAsideComponent]
    });
    fixture = TestBed.createComponent(AstronomyAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
