import { Injectable } from '@angular/core';
import {  CanActivate, Router} from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { ConexionService } from '../service/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private conexion:ConexionService, private router:Router){}

  canActivate(): Observable<boolean> {
    return this.conexion.isLogged.pipe(
      take(1),
      map((isLogged:boolean) => {
        if (isLogged) {
          return true;
        }
        this.router.navigate(['/login'])
        return false;
      })
    ) 
  }
}
