import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyItemComponent } from './property-item.component';

describe('PropertyItemComponent', () => {
  let component: PropertyItemComponent;
  let fixture: ComponentFixture<PropertyItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropertyItemComponent]
    });
    fixture = TestBed.createComponent(PropertyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
