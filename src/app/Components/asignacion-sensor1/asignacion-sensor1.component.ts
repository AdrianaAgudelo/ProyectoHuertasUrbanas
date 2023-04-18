import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-asignacion-sensor1',
  templateUrl: './asignacion-sensor1.component.html',
  styleUrls: ['./asignacion-sensor1.component.css']
})
export class AsignacionSensor1Component implements OnInit {

  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getAsignacionSensor();
  }

  public getAsignacionSensor(){
    var response=this.api.get("AsignacionSensor")
    console.log(response);
  }

 

}
