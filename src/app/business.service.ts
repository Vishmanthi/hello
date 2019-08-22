import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '../../node_modules/@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  uri = 'http://localhost:8080/';

  constructor(private http:HttpClient) {
   }
  getString(){
    return this.http.get("http://localhost:8080/url");
          
    }
  getPeople(){
      return this.http.get(this.uri+"people");
      
    }
}
