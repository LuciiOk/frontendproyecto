import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ConexionService } from '../servicios/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuardGuard implements CanActivate {

  constructor(private servicio:ConexionService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.servicio.isLoggedin()) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
  
}
