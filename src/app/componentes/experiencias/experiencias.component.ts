import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})


export class ExperienciasComponent implements OnInit {

  @Input() isAdmin:string;
  @Input()  persona: Persona;
  @Input() id: number;
  
  constructor( private toastr: ToastrService, public personaServ: PersonaService,
    public offcanvasService: NgbOffcanvas ) { }

  ngOnInit(): void {
  }

  openExp(expEdit: TemplateRef<any>) {
    this.offcanvasService.open(expEdit, { position: 'end' });
  }

  onUpdateExp( ): void{
    this.personaServ.updatePersona( this.id, this.persona ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }


}
