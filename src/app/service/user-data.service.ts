import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private HttpUploadOptions = {
    headers: new HttpHeaders(
      {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    )
  };

  constructor(private http:HttpClient) { 
  }

  getUserData():Observable<any> {
    return this.http.get(`${environment.hostname}/user/${localStorage.getItem('id')}`, this.HttpUploadOptions)
  }

  getMedicalInfo():Observable<any> {
    return this.http.get(`${environment.hostname}/fichas/${localStorage.getItem('id')}`, this.HttpUploadOptions)
  }

  getPleasuresInfo() {

  }
}
