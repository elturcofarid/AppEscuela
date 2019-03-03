import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private _auth:AuthService) {
   _auth.handleAuthentication();
  }


  login(){
    this._auth.login();
  }

  salir(){
    this._auth.logout();
  }

}
