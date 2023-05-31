import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Solicitudes1Component } from '../solicitudes1/solicitudes1.component';
import { RegNuevoSensorComponent } from 'src/app/Forms/reg-nuevo-sensor/reg-nuevo-sensor.component';
import { Usuario1Component } from '../usuario1/usuario1.component';
import { RegNuevoUsuarioComponent } from 'src/app/Forms/reg-nuevo-usuario/reg-nuevo-usuario.component';
import { SolicitudServicioComponent } from 'src/app/forms/solicitud-servicio/solicitud-servicio.component';
import { FormsService } from 'src/app/services/forms.service';
import { APIService } from 'src/app/services/api.service';




@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements AfterViewInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: MatTableDataSource<any>;
  @Input() component: String;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  /**
   *
   */
  constructor(public dialog: MatDialog, public forms:FormsService, public api:APIService) {
    this.dataSource=new MatTableDataSource()
        
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort= this.sort;
    console.log(this.dataSource.data,"data");
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   
  
     
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete (element:any){
    element.estado="Inactivo"
    console.log("delete",element)
    Swal.fire({
      title: 'Está seguro?',
      text: "Esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        
        switch (this.component) {
          case "usuario1":
            console.log("usuario1", element.idUsuario)
            this.api.put("Usuarios",element.idUsuario, element)
            window.location.reload();
            break;

          case "solicitudes1":
            console.log("solicitudes1", element.id)
            this.api.put("Solicituds",element.id, element)
            window.location.reload();
            break;
            
          case "sensores1":
            console.log("sensores1", element.idSensor);
            this.api.put("Sensors",element.idSensor, element)
            window.location.reload();
            break;
        
          default:
            break;
        }
 window.location.reload();
      }
      Swal.fire(
        'Borrado!',
        'El archivo fue eliminado con éxito',
        'success'
      )
    })
  }

  edit(object: any){
    Swal.fire(
      'Desea modificar este elemento?',
    ).then((result) => {
      if (result.isConfirmed) {
       
        switch (this.component) {
          case "usuario1":
            this.forms.object=object;
            this.forms.component.next("usuario1")
           this.dialog.open(RegNuevoUsuarioComponent);
            
            break;
          case "solicitudes1":
            this.forms.object=object;
            this.forms.component.next("solicitudes1")
            this.dialog.open(SolicitudServicioComponent);
            break;
          case "sensores1":
            this.forms.object=object;
            this.forms.component.next("sensores1")
            this.dialog.open(RegNuevoSensorComponent);
            break;
        
          default:
            break;
        }
      }
    })
    
  }

}


