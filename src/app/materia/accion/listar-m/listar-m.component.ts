import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listar-m',
  templateUrl: './listar-m.component.html',
  styleUrls: ['./listar-m.component.css']
})
export class ListarMComponent implements OnInit {
  @Input() materiaList: any[] = [];
  @Output() eliminar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onEliminar(id: number): void {
    this.eliminar.emit(id);
  }

}
