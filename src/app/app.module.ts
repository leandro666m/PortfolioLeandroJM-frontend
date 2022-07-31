import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AcercaComponent } from './componentes/acerca/acerca.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { HeaderComponent } from './componentes/header/header.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
//modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxTypedJsModule } from 'ngx-typed-js';//el tipeo en el Hero
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 '@fortawesome/fontawesome-free'; '@fortawesome/fontawesome/common-types';'@fortawesome/fontawesome/svg-core';
'@fortawesome/fontawesome/free-solid-svg-icons';'@fortawesome/fontawesome/free-brands-svg-icons'; 
import { AngularTiltModule } from 'angular-tilt';
import { SwiperModule } from 'swiper/angular';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [ AppComponent, LoginComponent, AcercaComponent, EducacionComponent,
    ExperienciasComponent, HeaderComponent, HeroComponent, SkillsComponent, ProyectosComponent],
  
    imports: [
    BrowserModule, AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgxTypedJsModule,

    CommonModule,
   ToastrModule.forRoot(),
    FontAwesomeModule,
    BrowserAnimationsModule, AngularTiltModule, SwiperModule,
    NgbModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
