import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { ConexionService } from '../service/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuardGuard implements CanActivate {

  constructor(private servicio:ConexionService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>  {
    
    return this.servicio.isLogged.pipe(
      take(1),
      map((isLogged:boolean) => {
        if (isLogged) {
          this.router.navigate([''])
          return false;
        }
        return true;
      })
    ) 
  }
  
}
