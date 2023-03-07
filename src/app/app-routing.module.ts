import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TableroSensoresComponent } from './Components/tablero-sensores/tablero-sensores.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
