import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAsideComponent } from './settings-aside.component';

describe('SettingsAsideComponent', () => {
  let component: SettingsAsideComponent;
  let fixture: ComponentFixture<SettingsAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SettingsAsideComponent]
    });
    fixture = TestBed.createComponent(SettingsAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
