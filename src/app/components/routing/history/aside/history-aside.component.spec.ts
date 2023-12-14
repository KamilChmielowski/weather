import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAsideComponent } from './history-aside.component';

describe('AstronomyAsideComponent', () => {
  let component: HistoryAsideComponent;
  let fixture: ComponentFixture<HistoryAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryAsideComponent]
    });
    fixture = TestBed.createComponent(HistoryAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
