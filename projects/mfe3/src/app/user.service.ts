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

  loginUser(email:String,password:String):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify({id:Math.floor(100000 + Math.random() * 900000),email,password});
    return this.http.get<any>(this.baseURL + 'users')
  }

  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('token');
    console.log("Token ",token);
    
    return !!(token);
  }
}
