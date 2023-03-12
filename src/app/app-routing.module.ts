import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableroSensoresComponent } from './Components/tablero-sensores/tablero-sensores.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { TablaComponent } from './components/tabla/tabla.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
