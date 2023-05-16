import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitudServicioComponent } from 'src/app/forms/solicitud-servicio/solicitud-servicio.component';

import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-solicitudes1',
  templateUrl: './solicitudes1.component.html',
  styleUrls: ['./solicitudes1.component.css']
})
export class Solicitudes1Component implements OnInit  {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(public api:APIService, public dialog: MatDialog){
    this.dataSource= new MatTableDataSource
  }
 

  openModal(){
    const dialogRef = this.dialog.open(SolicitudServicioComponent);

      }


  ngOnInit(): void {
    this.getSolicitudes();
  }

  public getSolicitudes(){
    this.api.get("Solicituds").then((res)=>{
      this.loadTable([res[0]])
      this.dataSource.data=res
  });
     

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
