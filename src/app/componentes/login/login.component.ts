import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/modelos/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation:ViewEncapsulation.None,
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  tiltSettings=({ scale: 1.1 });
  
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;

  constructor( private tokenService: TokenService, private authService: AuthService, 
    private router: Router, private toastr: ToastrService ) {   
  }

  ngOnInit() {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario( this.nombreUsuario, this.password );
    this.authService.login( this.loginUsuario ).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/portfolio']);
        window.location.reload();
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
         console.log(err.error.message);
      }
    );
  }

/*   onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
 */
  

}
