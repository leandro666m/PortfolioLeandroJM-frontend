import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Skill } from 'src/app/modelos/skill.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

 
  constructor( private toastr: ToastrService, public personaServ: PersonaService,
    public offcanvasService: NgbOffcanvas, private router: Router ) { }

    @Input() isAdmin: boolean;
    tiltSettings=({ scale: 1.1 });
    skills: Skill[] =[]; 
    idselecc: number;
load: boolean;

  ngOnInit(): void { 

   this.cargarSkills();
  }

  public cargarSkills(): void {
    this.personaServ.getSkills().subscribe(
      (data) => { this.skills = data; this.load=true; },
      (err) => { this.toastr.error(err.error.mensaje, 'Error skills.component', { timeOut: 3000,  positionClass: 'toast-top-center', });
        this.router.navigate(['/']);  }
    );
  }

  openSkill(skillEdit: TemplateRef<any>) {
    this.offcanvasService.open(skillEdit, { position: 'end' });
  }
  identif(id: number){
    this.idselecc = id;
  }

  onUpdateSkill( ): void{
    this.personaServ.updateSkill( this.idselecc, this.skills[this.idselecc] ).subscribe(
      data => { this.toastr.success('Actualizado', '', {timeOut: 3000, positionClass: 'toast-top-center'});
                  this.offcanvasService.dismiss() },
      err => { this.toastr.error(err.error.mensaje, 'Error', {timeOut: 3000,  positionClass: 'toast-top-center', });
                  console.log(err);       
      }
    );  
  }

  onDeleteSkill( id: number ): void{ 
    this.personaServ.deleteSkill(id).subscribe(
      data => { this.toastr.success('Eliminado', 'OK', {timeOut: 3000, positionClass: 'toast-top-center'});
        this.cargarSkills();  },
      err => { this.toastr.error(err.error.mensaje, 'Fail', { timeOut: 3000, positionClass: 'toast-top-center',});
    console.log(err); }
    );
  
}

}