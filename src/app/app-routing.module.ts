import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroSensoresComponent } from './Components/tablero-sensores/tablero-sensores.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { Usuario1Component } from './Components/usuario1/usuario1.component';
import { Sensores1Component } from './Components/sensores1/sensores1.component';
import { Solicitudes1Component } from './Components/solicitudes1/solicitudes1.component';
import { Mediciones1Component } from './Components/mediciones1/mediciones1.component';
const routes: Routes = [
{
  path:'tablero', component:TableroSensoresComponent
},
{
  path:'formulario', component:FormularioComponent
},
{
  path:'Login', component:UsuarioComponent
},
{
  path:'tabla', component:TablaComponent
},
{
  path:'Clientes1', component:Usuario1Component
},
{
  path:'Sensores1', component:Sensores1Component
},
{
  path:'Solicitudes1', component:Solicitudes1Component
},
{
  path:'Mediciones1', component:Mediciones1Component
},
{
  path:'Mediciones1', component:Mediciones1Component
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
