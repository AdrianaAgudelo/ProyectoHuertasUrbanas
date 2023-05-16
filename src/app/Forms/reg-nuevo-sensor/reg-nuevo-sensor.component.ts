import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-nuevo-sensor',
  templateUrl: './reg-nuevo-sensor.component.html',
  styleUrls: ['./reg-nuevo-sensor.component.css']
})
export class RegNuevoSensorComponent {
  SensorForm = this.fb.group({
   
    marca: [null, Validators.required],
    fechaFabricacion: [null, Validators.required],
    fechaFinVidaUtil: [null, Validators.required],
 
  });

  hasUnitNumber = false;

  
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
