import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';
import { JwtHelperService } from  '@auth0/angular-jwt/'

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<string>('');
  private helper = new JwtHelperService();

  // cabeceras para las peticiones http
  private HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
      }
    )
  };

  constructor(private http:HttpClient) { this.checkToken() }

  // este metodo obtiene el nombre de usuario desde sessionStorage,
  // sirve para cambiar el nombre del navbar al iniciar sesion
  get userName():Observable<string> {
    return this.user.asObservable();
  }

  // este metodo indica si el usuario esta logeado o no
  get isLogged():Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  // login del usuario
  login({mail, pass}:any):Observable<any> {

    let resultado = this.http.post<any>(`${environment.hostname}/auth/login`, JSON.stringify({"email":mail, "pass":pass}), {headers: this.HttpUploadOptions.headers, observe: 'response'})
    .pipe(
      map(res => {
        this.isLoggedIn.next(true);
        this.saveData(res);
        this.user.next(sessionStorage.getItem('nombre') || '')
        return res;
      })
    );

    return resultado;
  }

  // verifica si hay un token en el sessionStorage
  private checkToken():void {
    const token : string | null= sessionStorage.getItem('token');

    if (token?.length != 0 && token != null && !this.helper.isTokenExpired(token)) {
      this.isLoggedIn.next(true);
    } else {
      this.logout()
      this.isLoggedIn.next(false)
    }
  }

  // almacena los datos en sessionStorage
  private saveData(data:any) {
    sessionStorage.setItem('token', data.body.token);
    sessionStorage.setItem('id', data.body.user.id)
    sessionStorage.setItem('nombre', data.body.user.nombre)
  }

  //metodo para hacer logout
  logout() {
    sessionStorage.clear();
    this.isLoggedIn.next(false);
  }


  register(user:Users):Observable<any> {
    return this.http.post(`${environment.hostname}/auth/register`, 
    user
    , { headers:this.HttpUploadOptions.headers
    ,observe: 'response'}).pipe(map (res => {
      return res;
    }));
  }
}
