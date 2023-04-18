import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getTipoUsuario();
  }

  public getTipoUsuario(){
    var response=this.api.get("TipoUsuario")
    console.log(response);
  }

}
