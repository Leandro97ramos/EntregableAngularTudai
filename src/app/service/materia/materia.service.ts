import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private apiUrl = 'http://localhost:4200/assets/data/materias/materias.json';

  constructor(private http: HttpClient) { }
  
  getMaterias(): Observable<any> {
    return this.http.get(this.apiUrl);
  }   
  
  //agregar estudiante
  agregarMateria(materia: any): Observable<any> {
    return this.http.post(this.apiUrl, materia);
  }
}
