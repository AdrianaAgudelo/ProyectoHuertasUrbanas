import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegNuevoUsuarioComponent } from 'src/app/Forms/reg-nuevo-usuario/reg-nuevo-usuario.component';
import { APIService } from 'src/app/services/api.service';


@Component({
  selector: 'app-usuario1',
  templateUrl: './usuario1.component.html',
  styleUrls: ['./usuario1.component.css']
})
export class Usuario1Component implements OnInit{
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public api:APIService, public dialog: MatDialog){
    this.dataSource=new MatTableDataSource()
  }

  openModal(){
        const dialogRef = this.dialog.open(RegNuevoUsuarioComponent);
  }


  ngOnInit(): void {
    this.getUsuario();
  }
response:any
  public async getUsuario(){
    await this.api.get("Usuarios").then((res)=>{
      this.loadTable([res[0]])
      this.response=res
    })
    this.dataSource.data=this.response
    // console.log(response);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    
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
function loadTable(data: any, arg1: any) {
  throw new Error('Function not implemented.');
}

