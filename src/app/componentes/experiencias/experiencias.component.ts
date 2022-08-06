import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  constructor( private offcanvasService: NgbOffcanvas ) { }

  ngOnInit(): void {
  }

  openDer(experienciasEdit: TemplateRef<any>) {
    this.offcanvasService.open(experienciasEdit, { position: 'end' });
  }
}
