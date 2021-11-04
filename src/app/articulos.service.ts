import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http:HttpClient) { }

  retornar(){
    return this.http.get("https://www.datos.gov.co/resource/h9zk-qh33.json");
  }
}
