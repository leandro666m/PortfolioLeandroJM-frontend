import { Component, Input, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from './modelos/persona.model';
import { PersonaService } from './servicios/persona.service';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isAdmin = false;
  roles: string[]=[];
  persona: Persona;
  id: number = 0;

  constructor(
    public personaServ: PersonaService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
this.persona = new Persona();
    this.cargarPersona();
    this.cargarRoles();
  }

  public cargarPersona(): void {
    this.personaServ.getPersona(this.id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Error root.component', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  cargarRoles(): void {
    //para que se muestre el boton editar si es admin
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach((rol) => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }
}
