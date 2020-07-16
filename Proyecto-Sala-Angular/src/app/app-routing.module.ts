import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaSalaComponent } from './Components/Pages/lista-sala/lista-sala.component';
import { AgregarSalaComponent } from './Components/Pages/agregar-sala/agregar-sala.component';
import { ModificarSalaComponent } from './Components/Pages/modificar-sala/modificar-sala.component';

const routes: Routes = [
  { path: 'agregar-sala', component: AgregarSalaComponent },
  { path: 'lista-sala', component: ListaSalaComponent },
  { path: 'modificar-sala', component: ModificarSalaComponent },
  { path: '', component: ListaSalaComponent },
  { path: '**', component: ListaSalaComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
