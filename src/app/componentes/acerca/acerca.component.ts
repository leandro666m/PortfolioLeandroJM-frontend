import { Component, Injectable, Input, OnInit, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
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
  @Input() isAdmin: boolean;
  @Input() persona: Persona;
  @Input() id: number;
  tiltSettings=({ scale: 1.1 });

  constructor( public personaServ: PersonaService,public offcanvasService: NgbOffcanvas, 
    private toastr: ToastrService) { }

  ngOnInit(): void {  }

  openAbout( aboutEdit: any  ): void{
    this.offcanvasService.open( aboutEdit , { position: 'end'});
  }

  onUpdateAcerca( ): void{
    this.personaServ.updatePersona( this.id, this.persona ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }

}

