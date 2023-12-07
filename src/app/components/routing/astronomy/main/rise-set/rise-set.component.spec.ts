import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseSetComponent } from './rise-set.component';

describe('RiseSetComponent', () => {
  let component: RiseSetComponent;
  let fixture: ComponentFixture<RiseSetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RiseSetComponent]
    });
    fixture = TestBed.createComponent(RiseSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
