import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Users } from '../interfaces/users';

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

  constructor(private http:HttpClient) {  }

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
    return this.http.get(`${environment.hostname}/preferencias/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }

  deleteUser():Observable<any> {
    return this.http.delete(`${environment.hostname}/user/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }

  deleteMedicalInfo():Observable<any>{
    return this.http.delete(`${environment.hostname}/fichas/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }

  deletePleasures():Observable<any> {
    return this.http.delete(`${environment.hostname}/preferencias/${sessionStorage.getItem('id')}`, this.HttpUploadOptions);
  }

  updateUser(user:Users):Observable<any> {
    return this.http.put(`${environment.hostname}/user/${sessionStorage.getItem('id')}`, user,this.HttpUploadOptions);
  }

  updateMedicalInfo(user:Users):Observable<any> {
    return this.http.put(`${environment.hostname}/fichas/${sessionStorage.getItem('id')}`, user.infoMedica, this.HttpUploadOptions);
  }

  updatePleasures(user:Users):Observable<any> {
    return this.http.put(`${environment.hostname}/preferencias/${sessionStorage.getItem('id')}`, user.gustos, this.HttpUploadOptions);
  }
}
