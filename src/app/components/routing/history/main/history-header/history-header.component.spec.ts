import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryHeaderComponent } from './history-header.component';

describe('HistoryHeaderComponent', () => {
  let component: HistoryHeaderComponent;
  let fixture: ComponentFixture<HistoryHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryHeaderComponent]
    });
    fixture = TestBed.createComponent(HistoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
