import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL: string = "http://localhost:3000/";

  constructor(private http:HttpClient) { }

  loginUser(login:Login):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(login);
    console.log("Body",body)
    return this.http.post(this.baseURL + 'users', body,{'headers':headers})
  }
}
