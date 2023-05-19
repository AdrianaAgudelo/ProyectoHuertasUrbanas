import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Solicitudes1Component } from '../solicitudes1/solicitudes1.component';




@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() stickyEnd: String='Opciones';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   *
   */
  constructor(public dialog: MatDialog) {
    this.dataSource=new MatTableDataSource()
    
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort= this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  
     
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
function openModal() {
  // throw new Error('Function not implemented.');
 
    const dialogRef = this.dialog.open(Solicitudes1Component);

   
  
}

