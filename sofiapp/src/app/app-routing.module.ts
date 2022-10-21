import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './secciones/galeria/galeria.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

const routes: Routes = [
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
