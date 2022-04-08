import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http : HttpClient) { }
  getUserData(){
    return this.http.get<any>("https://reqres.in/api/users");
  }
  getUserDetails(id:any){
    return this.http.get('https://reqres.in/api/users/'+id);
  }
}
