import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMainComponent } from './map-main.component';

describe('MapMainComponent', () => {
  let component: MapMainComponent;
  let fixture: ComponentFixture<MapMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MapMainComponent]
    });
    fixture = TestBed.createComponent(MapMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
