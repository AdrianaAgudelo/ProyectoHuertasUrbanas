import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(public loginservice:LoginService){
  }

  em ="";
  pass = "";
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  async onSubmit(){
    this.em = this.loginForm.controls["usuario"].value;
    this.pass = this.loginForm.controls["password"].value;
    if(this.em==="usuario" && this.pass==="1234"){
      Swal.fire(
        'Ha ingresado correctamente',
      )
      localStorage.setItem('login','login');
      this.loginservice.login.next("login");
    } else{
      Swal.fire({
        icon:'error',
        title:'ha ocurrido un error',
        text:'usuario o contraseña inválidos',
        footer:'Inténtelo de nuevo'
      })
    }
  }
}
