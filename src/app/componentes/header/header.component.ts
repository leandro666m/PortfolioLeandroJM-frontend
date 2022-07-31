import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TokenService } from 'src/app/servicios/token.service';

import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./header.component.css'] })

export class HeaderComponent implements OnInit {


  isLogged = false;
  
  constructor(private modal:NgbModal,private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    //window.location.reload();
  }


  openLogin(login:any): void{
    this.modal.open( login, { centered:true, size:'xl'});
  }

}

