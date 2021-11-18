import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    ),
  };


  constructor(private http:HttpClient) { }

  login({mail, pass}:any):Observable<any> {

    let resultado =this.http.post(`${environment.hostname}/auth/login`, JSON.stringify({"email":mail, "pass":pass}), this.HttpUploadOptions);

    return resultado;
  }

  isLoggedin():boolean {
    if (localStorage.getItem('token')) {
      return true
    }

    return false;
  }

  register():Observable<any> {
    return this.http.post(`${environment.hostname}/auth/register`, JSON.stringify({}));
  }
}
