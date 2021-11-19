import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

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


  constructor(private http:HttpClient) { }

  login({mail, pass}:any):Observable<any> {

    let resultado =this.http.post(`${environment.hostname}/auth/login`, JSON.stringify({"email":mail, "pass":pass}), this.HttpUploadOptions);

    return resultado;
  }

  isLoggedin():boolean {
    if (sessionStorage.getItem('token')) {
      return true
    }
    return false;
  }

  getUser():Observable<any> {
    return this.http.get(`${environment.hostname}/user`);
  }

  register(user:Users):Observable<any> {
    return this.http.post(`${environment.hostname}/auth/register`, 
    user
    , { headers:this.HttpUploadOptions.headers
      ,observe: 'response'});
  }

  registerHeaders(user:Users):Observable<any> {
    return this.http.post(`${environment.hostname}/auth/register`, 
    user,
    {headers: this.HttpUploadOptions.headers, observe: 'response',},
    );
  }
}
