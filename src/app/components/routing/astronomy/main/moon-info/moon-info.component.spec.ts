import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoonInfoComponent } from './moon-info.component';

describe('MoonInfoComponent', () => {
  let component: MoonInfoComponent;
  let fixture: ComponentFixture<MoonInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MoonInfoComponent]
    });
    fixture = TestBed.createComponent(MoonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
