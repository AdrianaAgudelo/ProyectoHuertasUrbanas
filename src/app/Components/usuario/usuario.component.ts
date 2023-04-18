import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  constructor(public api:APIService) { }

  ngOnInit(): void {
    this.getusuario();

  }

  public getusuario(){
    var Response=this.api.get("usuario")
      console.log(Response);

  }

}
