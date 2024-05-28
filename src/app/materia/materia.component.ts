import { Component, OnInit, Type } from '@angular/core';
import { MateriaService } from '../service/materia/materia.service';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  materias: any[] = [];
  componenteActual: Type<any> | null = null;
  opc: string = '';


  constructor(private materiaService: MateriaService) {}

  ngOnInit(): void {
    this.materiaService.getMaterias().subscribe((data: any) => {
      this.materias = data;
      console.log(this.materias);
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
  
  agregarMaterias(materia: any) {
    this.materias.push(materia);
    console.log(this.materias);
  }


  cargarComponente(componente: Type<any>) {
    this.componenteActual = componente;
  }


  
  eliminarMateria(id: number): void {
    this.materias = this.materias.filter(est => est.idMateria !== id);
  }
 

}
