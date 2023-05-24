import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitud-servicio',
  templateUrl: './solicitud-servicio.component.html',
  styleUrls: ['./solicitud-servicio.component.css']
})
export class SolicitudServicioComponent implements OnInit{
  SolicitudForm = this.fb.group({
    
    idUsuario: [null, Validators.required],
    tipoSolicitud: [null, Validators.required],
    descripcionSolicitud: [null, Validators.required],
 });

  constructor(private fb: FormBuilder, public forms:FormsService) {}
  ngOnInit(): void {
    this.forms.component.subscribe((res)=>{
      if(res==="solicitudes1"){
        this.SolicitudForm.setControl("idUsuario", new FormControl(this.forms.object.idUsuario))
        this.SolicitudForm.setControl("tipoSolicitud", new FormControl(this.forms.object.tipoSolicitud))
        this.SolicitudForm.setControl("descripcionSolicitud", new FormControl(this.forms.object.descripcionSolicitud))
      }
    })
  }

  onSubmit(): void {
    //alert('Thanks!');

     Swal.fire(
       'Good job!',
       'You clicked the button!',
       'success'
     )

     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  

  }
}
