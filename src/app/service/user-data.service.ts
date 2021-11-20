import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  // cabeceras del header
  private HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token') // asigna a la cabecera authorization el token generado con jwt
      }
    )
  };

  constructor(private http:HttpClient) { 
  }

  // aqui se obtienen los datos basicos del usuario logeado.
  getUserData():Observable<any> {
    return this.http.get(`${environment.hostname}/user/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }

  // se obtiene la informacion medica del usuario logeado.
  getMedicalInfo():Observable<any> {
    return this.http.get(`${environment.hostname}/fichas/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }
  // se obtienen los gustos personales del usuario logeado.
  getPleasuresInfo() {

  }
}
