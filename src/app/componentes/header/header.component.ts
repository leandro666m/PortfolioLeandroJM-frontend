import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {
  @Input() isAdmin: boolean;
  @Input() persona: Persona;
  @Input() id: number;
  isLogged = false;
  tiltSettings = { scale: 1.1 };

  constructor(
    public personaServ: PersonaService,
    private modal: NgbModal,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  openLogin(login: any): void {
    this.modal.open(login, { centered: true, size: 'xl' });
  }


}
