import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-nuevo-sensor',
  templateUrl: './reg-nuevo-sensor.component.html',
  styleUrls: ['./reg-nuevo-sensor.component.css']
})
export class RegNuevoSensorComponent implements OnInit {
  SensorForm = this.fb.group({
   
    marca: [null, Validators.required],
    fechaFabricacion: [null, Validators.required],
    fechaFinVidaUtil: [null, Validators.required],
 
  });

  hasUnitNumber = false;

  
  constructor(private fb: FormBuilder, public forms:FormsService) {}
  ngOnInit(): void {
    this.forms.component.subscribe((res)=>{
      if(res==="sensores1"){
        this.SensorForm.setControl("marca", new FormControl(this.forms.object.marca))
        this.SensorForm.setControl("fechaFabricacion", new FormControl(this.forms.object.fechaFabricacion))
        this.SensorForm.setControl("fechaFinVidaUtil", new FormControl(this.forms.object.fechaFinVidaUtil))
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
