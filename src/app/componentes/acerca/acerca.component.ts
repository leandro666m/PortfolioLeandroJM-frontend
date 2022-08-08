import { Component, Injectable, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import {NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./acerca.component.css'] 
 })

export class AcercaComponent implements OnInit {

  constructor( public personaServ: PersonaService,public offcanvasService: NgbOffcanvas,
    private toastr: ToastrService, private tokenService: TokenService,
    private config: NgbInputDatepickerConfig,
    private router: Router ) { 
    }

  model: NgbDateStruct;
  tiltSettings=({ scale: 1.1 });
  roles: string[];
  isAdmin = false;
  persona: Persona;
  id: number = 1;

  ngOnInit(): void {
    this.configurarDatePicker();
    this.persona = { nombre: '', apellido: '', comentario: '', web: '', edad: 0, telefono: '', ciudad: '', email: '', titulo: '' };
    this.cargarPersona();
    this.cargarRoles();

  }

  configurarDatePicker(): void{
    this.config.minDate = {year: 1910, month: 1, day: 1}; this.config.maxDate = {year: 2010, month: 12, day: 31};
    this.config.outsideDays = 'hidden'; this.config.autoClose = 'inside'; this.config.placement = ['bottom-start', 'bottom-end'];
  }

  cargarRoles():void{
    //para que se muestre el boton editar si es admin
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( rol => { if (rol === 'ROLE_ADMIN') { this.isAdmin = true }   });
  }

  public cargarPersona(): void{
    
    this.personaServ.getPersona(this.id).subscribe(
      data => { this.persona = data},
      err => { this.toastr.error(err.error.mensaje, 'Error ngOnInit()-acerca.component', {timeOut: 3000,  positionClass: 'toast-top-center',  });
          this.router.navigate(['/'])  }
    );
  }

  openAbout( aboutEdit: any  ): void{
    this.offcanvasService.open( aboutEdit , { position: 'end'});
  }

  onUpdateAcerca( ): void{

    this.personaServ.updatePersona( this.id, this.persona ).subscribe(
      data => { this.toastr.success('Actualizado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }



}

