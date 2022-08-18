import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/modelos/experiencia.model';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})


export class ExperienciasComponent implements OnInit {

  constructor( private toastr: ToastrService, public personaServ: PersonaService,
    public offcanvasService: NgbOffcanvas, private router: Router ) { }

    @Input() isAdmin: boolean;
    tiltSettings=({ scale: 1.1 });
    experiencia: Experiencia[] = [];
    idselecc: number;
    load: boolean;

  ngOnInit(): void {  
   this.cargarExperiencias();
  }

  public cargarExperiencias(): void {
    this.personaServ.getExperiencias().subscribe(
      (data) => { this.experiencia = data; this.load=true; },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Error exp.component', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  openExp(expEdit: TemplateRef<any>) {
    this.offcanvasService.open(expEdit, { position: 'end' });
  }
  identif(id: number){
    this.idselecc = id;
  }

  onUpdateExp( ): void{
    this.personaServ.updateExperiencia( this.idselecc, this.experiencia[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  } 


}
