import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta importación
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { MateriaComponent } from './materia/materia.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AltaComponent } from './estudiante/accion/alta/alta.component';

import { ListarComponent } from './estudiante/accion/listar/listar.component';
import { ListarMComponent } from './materia/accion/listar-m/listar-m.component';
import { AltaMComponent } from './materia/accion/alta-m/alta-m.component'; // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstudianteComponent,
    MateriaComponent,
    HeaderComponent,
    FooterComponent,
    AltaComponent,
    ListarComponent,
    ListarMComponent,
    AltaMComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
