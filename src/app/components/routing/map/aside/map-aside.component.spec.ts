import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAsideComponent } from './map-aside.component';

describe('MapAsideComponent', () => {
  let component: MapAsideComponent;
  let fixture: ComponentFixture<MapAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MapAsideComponent]
    });
    fixture = TestBed.createComponent(MapAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
