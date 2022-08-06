import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./header.component.css'] })

export class HeaderComponent implements OnInit {

  isLogged = false;
  tiltSettings=({ scale: 1.1 });
  roles: string[];
  persona: Persona[]=[];
//persona: Persona;

  constructor( public personaServ: PersonaService,private modal:NgbModal,
    private router: Router,private toastr: ToastrService,private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarPersona();
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  openLogin(login:any): void{
    this.modal.open( login, { centered:true, size:'xl'});
  }

  cargarPersona(): void{
    this.personaServ.getPersonas().subscribe(
      data => { this.persona = data},
      err => { this.toastr.error(err.error.mensaje, 'Error ngOnInit()-acerca.component', {timeOut: 3000,  positionClass: 'toast-top-center',  });
          this.router.navigate(['/'])  }
    );
  }

}

