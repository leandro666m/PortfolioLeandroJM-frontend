import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
URL = 'http://localhost:8080/portfolio/';

constructor( private httpCliente: HttpClient ) { }

public getPersona(id: number): Observable<Persona> {
  return this.httpCliente.get<Persona>( this.URL + `getPersona/${id}`);
}

public getPersonas(): Observable<Persona[]> {
  return this.httpCliente.get<Persona[]>( this.URL + 'getPersonas' );
}

public updatePersona( id: number, persona: Persona ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editar/${id}`, persona );
}
}
/*
  productoURL = 'http://localhost:8080/producto/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }
*/