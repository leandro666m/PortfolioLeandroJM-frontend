import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/modelos/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor( public personaServ: PersonaService, private router: Router,private toastr: ToastrService, 
    private activatedRoute: ActivatedRoute) { }

  //persona: Persona[]=[];
  persona: Persona;
  
  ngOnInit(): void {
    this.persona = { nombre: '', apellido: '', comentario: '', web: '', edad: 0, telefono: '', ciudad: '', email: '', titulo: '' };
    this.cargarPersona();
  }

  public cargarPersona(): void{
    //const id = this.activatedRoute.snapshot.params['id'];
    const id = 1;
    this.personaServ.getPersona(id).subscribe(
      data => { this.persona = data },
      err => { this.toastr.error(err.error.mensaje, 'Error ngOnInit()-hero.component', {timeOut: 3000,  positionClass: 'toast-top-center',  });
          this.router.navigate(['/'])  }
    );
  }


}
