import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMainComponent } from './settings-main.component';

describe('SettingsMainComponent', () => {
  let component: SettingsMainComponent;
  let fixture: ComponentFixture<SettingsMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SettingsMainComponent]
    });
    fixture = TestBed.createComponent(SettingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
