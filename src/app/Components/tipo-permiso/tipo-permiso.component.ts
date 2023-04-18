import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tipo-permiso',
  templateUrl: './tipo-permiso.component.html',
  styleUrls: ['./tipo-permiso.component.css']
})
export class TipoPermisoComponent implements OnInit {
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getTipoPermiso();
  }

  public getTipoPermiso(){
    var response=this.api.get("TipoPermiso")
    console.log(response);
  }
}
