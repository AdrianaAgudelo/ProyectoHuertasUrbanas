import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegNuevoSensorComponent } from 'src/app/Forms/reg-nuevo-sensor/reg-nuevo-sensor.component';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sensores1',
  templateUrl: './sensores1.component.html',
  styleUrls: ['./sensores1.component.css']
})
export class Sensores1Component implements OnInit{
displayedColumns: string[] = [];
dataSource: MatTableDataSource<any>;
  

@ViewChild(MatPaginator) paginator: MatPaginator;
@ViewChild(MatSort) sort: MatSort;

  
  constructor(public api:APIService, public dialog: MatDialog){
    this.dataSource= new MatTableDataSource
  }
    
  openModal(){
    const dialogRef = this.dialog.open(RegNuevoSensorComponent);
  }
  


  ngOnInit(): void {
    this.getSensores();
  }

  public getSensores(){
    this.api.get("Sensors").then((res)=>{
      this.loadTable([res[0]])
      this.dataSource.data=res
  });

    this.dataSource.paginator=this.paginator;
    this.dataSource.sort= this.sort;
  }

  loadTable(data:any[]){
    for(let column in data[0]){
      this.displayedColumns.push(column)
    }
  }




  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
