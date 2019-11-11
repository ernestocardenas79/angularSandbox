import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private url='https://reqres.in/api/users/';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]>{
    return this.http
    .get(this.url+'?page=1&delay=3')
    .pipe(
      map((info: any)=> info.data)
    );
  }

  getUser(id){
    return this.http
    .get(this.url + id)
    .pipe(
      map((info: any)=> info.data)
    );
  }

}
