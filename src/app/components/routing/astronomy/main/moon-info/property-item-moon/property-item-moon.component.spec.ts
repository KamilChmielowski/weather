import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyItemMoonComponent } from './property-item-moon.component';

describe('PropertyItemMoonComponent', () => {
  let component: PropertyItemMoonComponent;
  let fixture: ComponentFixture<PropertyItemMoonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropertyItemMoonComponent]
    });
    fixture = TestBed.createComponent(PropertyItemMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
