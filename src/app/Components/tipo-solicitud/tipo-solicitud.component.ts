import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tipo-solicitud',
  templateUrl: './tipo-solicitud.component.html',
  styleUrls: ['./tipo-solicitud.component.css']
})
export class TipoSolicitudComponent implements OnInit {
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getTipoSolicitud();
  }

  public getTipoSolicitud(){
    var response=this.api.get("TipoSolicitud")
    console.log(response);
  }

}
