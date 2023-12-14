import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryMainComponent } from './history-main.component';

describe('HistoryMainComponent', () => {
  let component: HistoryMainComponent;
  let fixture: ComponentFixture<HistoryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryMainComponent]
    });
    fixture = TestBed.createComponent(HistoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
