import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { AsignacionSensorComponent } from './Components/asignacion-sensor/asignacion-sensor.component';
import { SensorComponent } from './Components/sensor/sensor.component';
import { MedicionComponent } from './Components/medicion/medicion.component';
import { TipoUsuarioComponent } from './Components/tipo-usuario/tipo-usuario.component';
import { TipoPermisoComponent } from './Components/tipo-permiso/tipo-permiso.component';
import { SolicitudComponent } from './Components/solicitud/solicitud.component';
import { TipoSolicitudComponent } from './Components/tipo-solicitud/tipo-solicitud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableroSensoresComponent } from './Components/tablero-sensores/tablero-sensores.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AsignacionSensorComponent,
    SensorComponent,
    MedicionComponent,
    TipoUsuarioComponent,
    TipoPermisoComponent,
    SolicitudComponent,
    TipoSolicitudComponent,
    MenuComponent,
    TableroSensoresComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatFormFieldModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
