import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient } from '../../node_modules/@angular/common/http';
import {Pupil} from './pupil';
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

    postPeople(p:Pupil){

    
      
      return this.http.post("http://localhost:8080/api/create",p);
    }

    deletePupil(id:number){
      console.log("http://localhost:8080/api/people/"+id);
      return this.http.delete("http://localhost:8080/api/people/"+id);
    }
}
