import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.component.html',
  styleUrls: ['./solicitud-servicio.component.css']
})
export class SolicitudServicioComponent {
  SolicitudForm = this.fb.group({
    
    idUsuario: [null, Validators.required],
    tipoSolicitud: [null, Validators.required],
    descripcionSolicitud: [null, Validators.required],
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
