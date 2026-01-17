import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //Dirección de tu servidor Node.js
  private API_URL = 'http://localhost:3000/api/datos';

  constructor(private http: HttpClient) { }

  //Obtenemos todos los registros
  getPersonas(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  // Añade un nuevo registro
  addPersona(persona: any): Observable<any> {
    return this.http.post(this.API_URL, persona);
  }

  //Elimina un registro (usando su ID)
  deletePersona(id: string): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  //Actualiza un registro
  updatePersona(id: string, persona: any): Observable<any> {
    return this.http.put(`${this.API_URL}/${id}`, persona);
  }
}