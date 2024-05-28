import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Estudiante} from '../../../interface/estudiante'
import { Router } from '@angular/router';
@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  @Output() estudianteAgregado = new EventEmitter<any>();
  router: any;

  constructor(router: Router) { }

  ngOnInit(): void {
  }
  nuevoEstudiante: Estudiante = {
    idEstudiante: Math.floor(Math.random() * 1000),
    nombre: '',
    apellido: '',
    fechaNacimiento: new Date(),
    genero: '',
    documento: 0,
    email: '',
    ciudad: ''
  };

  onSubmit(event: Event): void {
    console.log('Formulario enviado', this.nuevoEstudiante);
    this.estudianteAgregado.emit(this.nuevoEstudiante);
    this.router.navigate(['/listar']);    
  }

  
}
