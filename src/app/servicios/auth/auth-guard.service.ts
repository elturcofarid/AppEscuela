import { Injectable } from '@angular/core';
import { Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot,
         CanActivate
       } from '@angular/router';

import { AuthService } from "../../servicios/auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private _auth:AuthService) { }


  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){

    if (this._auth.isAuthenticated()){
      return true;
    }else{
      return false;
    }
   }
}
