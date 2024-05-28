import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private apiUrl = 'http://localhost:4200/assets/data/estudiantes/estudiantes.json';
  
  constructor(private http: HttpClient ) { }

  //obtengo los estudiantes del json sin http
  getEstudiantes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }   
  
  //agregar estudiante
  agregarEstudiante(estudiante: any): Observable<any> {
    return this.http.post(this.apiUrl, estudiante);
  }


}