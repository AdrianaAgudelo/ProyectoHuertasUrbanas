import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mediciones1',
  templateUrl: './mediciones1.component.html',
  styleUrls: ['./mediciones1.component.css']
})
export class Mediciones1Component implements OnInit {
  
  constructor(public api:APIService){}

  ngOnInit(): void {
    this.getMediciones();
  }

  public getMediciones(){
    var response=this.api.get("Medicion")
    console.log(response);
  }

}
