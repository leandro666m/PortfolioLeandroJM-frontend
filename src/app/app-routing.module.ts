import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';



const routes: Routes = [

  //{ path: 'portfolio', component: AppComponent },
  //{ path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: '',  component: AppComponent  },
  { path: '**', redirectTo: 'portfolio', pathMatch: 'full'  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
