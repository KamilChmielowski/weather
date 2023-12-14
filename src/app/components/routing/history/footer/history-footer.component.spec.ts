import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFooterComponent } from './history-footer.component';

describe('HistoryFooterComponent', () => {
  let component: HistoryFooterComponent;
  let fixture: ComponentFixture<HistoryFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HistoryFooterComponent]
    });
    fixture = TestBed.createComponent(HistoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
