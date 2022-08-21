import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/modelos/persona.model';
import { Educacion } from 'src/app/modelos/educacion.model';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor( private toastr: ToastrService, public personaServ: PersonaService, private modalService: NgbModal,
    public offcanvasService: NgbOffcanvas, private router: Router ) { }

    @Input() isAdmin: boolean;
    tiltSettings=({ scale: 1.1 });
    educacion: Educacion[] =[]; 
    idselecc: number;
    load: boolean;

  ngOnInit(): void { 
   this.cargarEducacion();
  }

  public cargarEducacion(): void {
    this.personaServ.getEducacion().subscribe(
      (data) => {
        this.educacion = data; ; this.load=true;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

  openEduc( educEdit: TemplateRef<any>) {
    this.offcanvasService.open( educEdit, { position: 'end' });
  }
  identif(id: number){
    this.idselecc = id;
  }

  openEducCursos( educCursos: TemplateRef<any>) {
    this.modalService.open( educCursos, { size: 'xl'});
  }


  onUpdateEduc( ): void{
    this.personaServ.updateEducacion( this.idselecc, this.educacion[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  } 

  onDeleteEduc( id: number ): void{ 
      this.personaServ.deleteEduc(id).subscribe(
        data => { this.toastr.success('Eliminado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
          this.cargarEducacion();  },
        err => { this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center',});
      console.log(err); }
      );
    
  }


}
