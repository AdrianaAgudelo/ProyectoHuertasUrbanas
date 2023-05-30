import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';
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

  constructor(private fb: FormBuilder, public forms:FormsService, public api:APIService) {}
  ngOnInit(): void {

    this.forms.component.subscribe((res)=>{
      if(res==="solicitudes1"){
        this.SolicitudForm.setControl("idUsuario", new FormControl(this.forms.object.id))
        this.SolicitudForm.setControl("tipoSolicitud", new FormControl(this.forms.object.nombreSolicitud))
        this.SolicitudForm.setControl("descripcionSolicitud", new FormControl(this.forms.object.descripcionSolicitud))
      }
    })
      this.forms.component.subscribe((res)=>{
        if(res==="solicitudes1"){
        
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
  }
}
