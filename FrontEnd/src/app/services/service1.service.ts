import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rest1 } from '../interfaces/rest1';
import { Entity } from '../interfaces/entity';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  url:string="http://localhost:1155/entities"

  constructor(private http:HttpClient) { }

  getRest():Observable<Rest1>{
    return this.http.get<Rest1>(this.url);
  }

  postRest(entity:Entity):Observable<Entity>{
    return this.http.post<Entity>(this.url, entity);
  }
  putRest(link:string, entity:Entity):Observable<Entity>{
    return this.http.put<Entity>(link, entity);
  }
  deleteRest(entity:Entity):Observable<Entity>{
    return this.http.delete<Entity>(entity._links.self.href)
  }

}
