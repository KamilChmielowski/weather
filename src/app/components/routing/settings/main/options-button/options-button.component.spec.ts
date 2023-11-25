import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsButtonComponent } from './options-button.component';

describe('OptionsButtonComponent', () => {
  let component: OptionsButtonComponent;
  let fixture: ComponentFixture<OptionsButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OptionsButtonComponent]
    });
    fixture = TestBed.createComponent(OptionsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
