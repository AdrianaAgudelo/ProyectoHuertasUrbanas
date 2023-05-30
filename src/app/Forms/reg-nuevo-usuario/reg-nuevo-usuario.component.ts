import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-nuevo-usuario',
  templateUrl: './reg-nuevo-usuario.component.html',
  styleUrls: ['./reg-nuevo-usuario.component.css']
})
export class RegNuevoUsuarioComponent implements OnInit{
  UserForm = this.fb.group({
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    tipoDocumento: [null, Validators.required],
    numDocumento: [null, Validators.required],
    direccion: [null, Validators.required],
    correo: [null, Validators.email],
    
  });

  constructor(private fb: FormBuilder, public forms:FormsService) {}
  ngOnInit(): void {
    this.forms.component.subscribe((res)=>{
      if(res==="usuario1"){
        this.UserForm.setControl("nombre",new FormControl(this.forms.object.nombres))
        this.UserForm.setControl("apellido",new FormControl(this.forms.object.apellidos))
        this.UserForm.setControl("tipoDocumento",new FormControl(this.forms.object.tipoDocumento))
        this.UserForm.setControl("numDocumento",new FormControl(this.forms.object.numDocumento))
        this.UserForm.setControl("direccion",new FormControl(this.forms.object.direccion)) 
        this.UserForm.setControl("correo",new FormControl(this.forms.object.correo))
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
