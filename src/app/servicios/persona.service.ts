import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../modelos/educacion.model';
import { Experiencia } from '../modelos/experiencia.model';
import { Persona } from '../modelos/persona.model';
import { Skill } from '../modelos/skill.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  
URL = 'http://localhost:8080/portfolio/';

constructor( private httpCliente: HttpClient ) { }

public getPersona(id: number): Observable<Persona> {
  return this.httpCliente.get<Persona>( this.URL + `getPersona/${id}`);
}

public updatePersona( id: number, persona: Persona ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editar/${id}`, persona );
}

//-------------Experiencias------------------------------------------------------------

public getExperiencias(): Observable<Experiencia[]> {
  return this.httpCliente.get<Experiencia[]>( this.URL + 'getExperiencias' );
}

public updateExperiencia( id: number, experiencia: Experiencia ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editarExp/${id}`, experiencia );
}
//-------------Educacion------------------------------------------------------------

public getEducacion(): Observable<Educacion[]> {
  return this.httpCliente.get<Educacion[]>( this.URL + 'getEducacion' );
}
public updateEducacion( id: number, educ: Educacion ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editarEduc/${id}`, educ );
}

public delete(id: number): Observable<any> {
  return this.httpCliente.delete<any>(this.URL + `borrarEduc/${id}`);
}

//-------------Skills------------------------------------------------------------

public getSkills(): Observable<Skill[]> {
  return this.httpCliente.get<Skill[]>( this.URL + 'getSkills' );
}
public updateSkill( id: number, skill: Skill ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editarSkill/${id}`, skill );
}

//-------------Proyectos------------------------------------------------------------

/* public getProyectos(): Observable<Proyectos[]> {
  return this.httpCliente.get<Skill[]>( this.URL + 'getSkills' );
}
public updateProyectos( id: number, skill: Skill ): Observable<any> {
  return this.httpCliente.put<any>( this.URL + `editarSkill/${id}`, skill );
} */


}
