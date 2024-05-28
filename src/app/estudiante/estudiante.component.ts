import { Component, OnInit, Type } from '@angular/core';

import { AltaComponent } from './accion/alta/alta.component'
import { EstudianteService } from '../service/estudiante/estudiante.service';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: any[] = [];
  componenteActual: Type<any> | null = null;
  opc: string = '';

  constructor(private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.estudianteService.getEstudiantes().subscribe((data: any) => {
      this.estudiantes = data;
      console.log(this.estudiantes);
    },
      (error) => {
        console.error(error);
      },
      () => {
        console.log('Petición finalizada');
      }

    );
     
  }

  llamarComp(acc: string) {

    this.opc = acc;
    console.log(this.opc);
  }



  agregarEstudiante(estudiante: any) {
    this.estudiantes.push(estudiante);
  }



  obtenerEstudiantes(): void {
    this.estudiantes.push({
      idEstudiante: this.estudiantes.length + 1,
      nombre: 'Juan',
      apellido: 'Perez',
      fechaNacimiento: '1990-01-01',
      genero: 'M',
      documento: '12345678',
      email: '',
      ciudad: 'Buenos Aires'
    });

    //muestrame los datos
    console.log(this.estudiantes);
  }

  eliminarEstudiante(id: number): void {
    this.estudiantes = this.estudiantes.filter(est => est.idEstudiante !== id);
  }



}
