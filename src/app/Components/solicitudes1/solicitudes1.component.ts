import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-solicitudes1',
  templateUrl: './solicitudes1.component.html',
  styleUrls: ['./solicitudes1.component.css']
})
export class Solicitudes1Component implements OnInit {
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getSolicitudes();
  }

  public getSolicitudes(){
    var response=this.api.get("Solicitud")
    console.log(response);
  }

}
