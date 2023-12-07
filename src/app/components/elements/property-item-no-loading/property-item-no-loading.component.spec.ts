import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyItemNoLoadingComponent } from './property-item-no-loading.component';

describe('PropertyItemNoLoadingComponent', () => {
  let component: PropertyItemNoLoadingComponent;
  let fixture: ComponentFixture<PropertyItemNoLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PropertyItemNoLoadingComponent]
    });
    fixture = TestBed.createComponent(PropertyItemNoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
