import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MateriaComponent } from './materia/materia.component';

//rutas home - estudiantes - materias - Gestion
const routes: Routes = [
  
//estudiantes

{ path: 'estudiantes', component: EstudianteComponent },

//materia
{ path: 'materia', component: MateriaComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})






export class AppRoutingModule { }
