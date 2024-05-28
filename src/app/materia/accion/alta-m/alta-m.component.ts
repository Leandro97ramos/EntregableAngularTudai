import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Materia } from 'src/app/interface/materia';

@Component({
  selector: 'app-alta-m',
  templateUrl: './alta-m.component.html',
  styleUrls: ['./alta-m.component.css']
})
export class AltaMComponent implements OnInit {
  @Output() materiaAgregada = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  //aplico la interfaz estudiante
  nuevaMateria: Materia = {
    idMateria: 0,
    nombre: '',
    duracion: '',
    profesor: '',
  };

  onSubmit(event: Event): void {
    console.log('Formulario enviado', this.nuevaMateria);
    this.materiaAgregada.emit(this.nuevaMateria);

    event.preventDefault();
    
  }

  

}
