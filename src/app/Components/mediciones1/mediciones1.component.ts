import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mediciones1',
  templateUrl: './mediciones1.component.html',
  styleUrls: ['./mediciones1.component.css']
})
export class Mediciones1Component implements OnInit {
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  
  constructor(public api:APIService){
    this.dataSource= new MatTableDataSource
  }
    
  ngOnInit(): void {
    this.getMediciones();
  }

  public getMediciones(){
    this.api.get("Medicions").then((res)=>{
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
