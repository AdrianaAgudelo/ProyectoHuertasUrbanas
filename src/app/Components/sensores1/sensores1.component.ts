import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sensores1',
  templateUrl: './sensores1.component.html',
  styleUrls: ['./sensores1.component.css']
})
export class Sensores1Component implements OnInit{
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getSensores();
  }

  public getSensores(){
    var response=this.api.get("Sensor")
    console.log(response);
  }

}
