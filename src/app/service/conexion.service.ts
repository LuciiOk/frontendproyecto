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

  get userName():Observable<string> {
    return this.user.asObservable();
  }

  get isLogged():Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }

  login({mail, pass}:any):Observable<any> {

    let resultado = this.http.post<any>(`${environment.hostname}/auth/login`, JSON.stringify({"email":mail, "pass":pass}), {headers: this.HttpUploadOptions.headers, observe: 'response'})
    .pipe(
      map(res => {
        this.isLoggedIn.next(true);
        this.saveData(res);
        this.user.next(localStorage.getItem('nombre') || '')
        return res;
      })
    );

    return resultado;
  }

  private checkToken():void {
    const token : string | null= localStorage.getItem('token');

    if (token?.length != 0 && token != null) {
      this.isLoggedIn.next(true);
    } else 
      this.isLoggedIn.next(false)
  }

  private saveData(data:any) {
    localStorage.setItem('token', data.body.token);
    localStorage.setItem('id', data.body.user.id)
    localStorage.setItem('nombre', data.body.user.nombre)
  }

  logout() {
    localStorage.clear();
    this.isLoggedIn.next(false);
  }


  register(user:Users):Observable<any> {
    return this.http.post(`${environment.hostname}/auth/register`, 
    user
    , { headers:this.HttpUploadOptions.headers
      ,observe: 'response'});
  }
}
