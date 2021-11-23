import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amigo } from '../interfaces/amigo';

@Injectable({
  providedIn: 'root'
})
export class AmigosService {

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

  constructor(private http:HttpClient) { }

  agregarAmigo(amigo:Amigo):Observable<Amigo> {
    return this.http.post<Amigo>(`${environment.hostname}/amigos`, amigo, this.HttpUploadOptions);
  }

  getAmigo():Observable<Amigo[]> {
    return this.http.get<Amigo[]>(`${environment.hostname}/amigos/${sessionStorage.getItem('id')}`,
     this.HttpUploadOptions).pipe(map(data => {
       return data;
     }));
  }

  deleteAmigo(amigo:Amigo):Observable<any> {
    console.log(amigo.id_amigo, amigo.id_usuario)
    return this.http.delete(`${environment.hostname}/amigos/${amigo.id_amigo}/${amigo.id_usuario}`, this.HttpUploadOptions);
  }
}
