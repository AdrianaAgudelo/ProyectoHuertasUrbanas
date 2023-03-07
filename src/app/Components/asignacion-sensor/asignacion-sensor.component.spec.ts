import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionSensorComponent } from './asignacion-sensor.component';

describe('AsignacionSensorComponent', () => {
  let component: AsignacionSensorComponent;
  let fixture: ComponentFixture<AsignacionSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignacionSensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
