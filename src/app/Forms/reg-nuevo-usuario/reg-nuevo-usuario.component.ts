import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-nuevo-usuario',
  templateUrl: './reg-nuevo-usuario.component.html',
  styleUrls: ['./reg-nuevo-usuario.component.css']
})
export class RegNuevoUsuarioComponent {
  UserForm = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    tipoDocumento: [null, Validators.required],
    numDocumento: [null, Validators.required],
    direccion: [null, Validators.required],
    correo: [null, Validators.required],
    
   
  });




  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    //alert('Thanks!');
     Swal.fire(
       'Good job!',
       'You clicked the button!',
       'success'
     )

  }
}
