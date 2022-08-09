import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Persona } from './modelos/persona.model';
import { TokenService } from './servicios/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./app.component.css']
})

export class AppComponent {

 isAdmin = false;
  roles: string[];
  persona: Persona;
  id: number = 0;
  
constructor(  private tokenService: TokenService){}

ngOnInit(): void {
  this.cargarRoles();
}

cargarRoles():void{
  //para que se muestre el boton editar si es admin
  this.roles = this.tokenService.getAuthorities();
  this.roles.forEach( rol => { if (rol === 'ROLE_ADMIN') { this.isAdmin = true }   });
}

}
