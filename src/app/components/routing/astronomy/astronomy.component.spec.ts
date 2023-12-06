import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronomyComponent } from './astronomy.component';

describe('AstronomyComponent', () => {
  let component: AstronomyComponent;
  let fixture: ComponentFixture<AstronomyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AstronomyComponent]
    });
    fixture = TestBed.createComponent(AstronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
